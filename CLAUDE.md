# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**ADsP Master** — ADsP(데이터분석 준전문가) 자격증 시험 준비용 웹 사이트.
이론 학습 + 예상문제 풀이 + 모의고사.

> 이 저장소는 기존 DAsP(데이터아키텍처 준전문가) 학습 사이트의 구조를 재사용하여 ADsP 콘텐츠로 전환한 것이다. 전체 아키텍처(SSG, 챕터 레지스트리, 진도 관리 방식)는 동일하며, 과목 구조와 콘텐츠만 교체되었다. 이전 DAsP 콘텐츠는 `backup_dasp_20260712/`에 백업되어 있다. 대부분의 챕터는 이론·문제가 15~22문항 수준으로 보강되었으나 `part3_ch1`은 아직 3문항뿐이다. 모의고사(exam1/exam2)는 실제 필기시험 과목별 배점 비율(10/10/30, 총 50문항)에 맞춰 전면 재작성되었으며, 최근 출제 경향을 반영해 3과목에서 R 코드/함수 관련 문항은 배제하고 exam1·exam2는 서로 다른 세부 문항으로 구성했다.

## ADsP 시험 구조

| 과목 | 제목 | 문항 | 배점 |
|------|------|------|------|
| 1과목 | 데이터 이해 | 10문항 | 20점 (문항당 2점) |
| 2과목 | 데이터분석 기획 | 10문항 | 20점 (문항당 2점) |
| 3과목 | 데이터분석 | 30문항 | 60점 (문항당 2점) |
| 합계 | | 50문항 | 100점 / 100분 |

합격 기준: 전체 60점 이상 + 각 과목 40% 이상

## 기술 스택

- **Next.js 14** (Pages Router, TypeScript)
- **Tailwind CSS** — 인디고/블루 팔레트 (primary: #6366F1)
- **React Context + localStorage** — 진도 관리 (`dasp_progress` 키)
- **react-markdown + rehype-highlight** — 이론 렌더링
- **Vitest + jsdom** — 단위 테스트

## 핵심 명령어

```bash
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # SSG 빌드
npm run lint         # ESLint
npm run type-check   # TypeScript 검사 (tsc --noEmit)
npm run test         # Vitest (1회)
npm run test:watch   # Vitest (watch)
npx vitest run lib/chapters.test.ts  # 단일 테스트 파일
npx tsx scripts/validate-questions.ts  # 문제 JSON 스키마 검증
```

## 챕터 레지스트리 (lib/chapters.ts) — 8개

`CHAPTERS` 배열이 유일한 소스. SSG `getStaticPaths`, 네비게이션, 문제 필터 모두 이 배열 참조.

| 챕터 ID | 과목 | 공식 주요항목 제목 |
|---------|------|-----------------|
| `part1_ch1` | 1과목 | 데이터의 이해 |
| `part1_ch2` | 1과목 | 데이터의 가치와 미래 |
| `part1_ch3` | 1과목 | 가치 창조를 위한 데이터 사이언스와 전략 인사이트 |
| `part2_ch1` | 2과목 | 데이터분석 기획의 이해 |
| `part2_ch2` | 2과목 | 분석 마스터플랜 |
| `part3_ch1` | 3과목 | R 기초와 데이터 마트 |
| `part3_ch2` | 3과목 | 통계분석 |
| `part3_ch3` | 3과목 | 정형 데이터 마이닝 |

## 핵심 구조

```
pages/
  index.tsx                    → 대시보드 홈
  theory/index.tsx             → 이론 목차 (3과목 그리드)
  theory/[chapterId].tsx       → 이론 본문 (SSG, 8개 경로)
  quiz/index.tsx               → 문제풀기 허브
  quiz/chapter/[chapterId].tsx → 단원별 풀이 (SSG, 8개 경로)
  quiz/exam.tsx                → 모의고사 (50문항, 100분)
  quiz/result.tsx              → 결과 (3과목별 점수, 문항당 2점)
  quiz/wrong.tsx               → 오답 노트
  quiz/bookmarks.tsx           → 북마크
components/
  layout/Layout.tsx, TopBar.tsx
  ui/Mascot.tsx, Badge.tsx
  quiz/QuestionCard, AnswerFeedback, QuizNavigator, ExamTimer(6000초)
  theory/TheoryContent, TheoryTOC, RelatedQuestions
  dashboard/HeroBanner, LearningPath, ChapterProgress, WeakChapters, WeeklyXP, ProgressChart
lib/
  chapters.ts   → CHAPTERS(8개), CHAPTER_IDS, PART_TITLES (import해서 쓸 것 — 페이지에 별도 정의하지 말 것)
  questions.ts  → getAllQuestions, sampleExamQuestions(50문항: 1~2과목 10문항씩, 3과목 30문항)
  theory.ts     → getChapterContent
  progress.ts   → loadProgress/saveProgress (dasp_progress)
context/ProgressContext.tsx    → useProgress hook
types/index.ts                 → Question(part: 1|2|3), ExamResult(part1~3Score), Stats
data/
  theory/part{1-3}_ch{1-3}.md       → 8개 이론 파일 (챕터당 1개)
  questions/part{1-3}_ch{1-3}.json  → 8개 문제 파일 (현재 챕터당 3~22문항, 합계 141문항 — part3_ch1만 3문항으로 보강 필요)
  questions/mockexam/exam1.json     → 모의고사 1회 (50문항: 1과목 10·2과목 10·3과목 30, 3과목은 R 관련 문항 배제)
  questions/mockexam/exam2.json     → 모의고사 2회 (50문항, exam1과 중복되지 않는 별도 세부 문항으로 구성)
scripts/validate-questions.ts       → JSON 스키마 검증 (p[1-3]c[1-3]_\d{3}) + 파일별·과목별 문항 수 집계 출력
backup_dasp_20260712/               → 전환 전 DAsP 콘텐츠·문서 백업
```

## 핵심 데이터 패턴

- 이론·문제 페이지: `getStaticPaths` + `getStaticProps`로 SSG
- `localStorage` 접근 전 반드시 `typeof window !== 'undefined'` 가드
- **두 가지 ID 형식**:
  - 파일명/라우팅: `part2_ch1` (언더스코어)
  - 문제 JSON id: `p2c1_001` (`p{과목}c{챕터}_{3자리}`)
  - 모의고사 id: `exam1_001`, `exam2_001`
- `part: 1 | 2 | 3` (3과목 지원)
- `chapter: number` (과목별 장 번호: 1과목 1~3, 2과목 1~2, 3과목 1~3)
- 모의고사: 50문항 (1~2과목 10문항, 3과목 30문항), ExamTimer 6000초(100분), 문항당 2점
- `PART_TITLES`는 `lib/chapters.ts`에만 정의되어 있다 — `pages/quiz/exam.tsx`, `pages/quiz/result.tsx` 등에서 절대 재정의하지 말고 반드시 import해서 사용할 것 (과거 DAsP 버전에서 3곳에 중복 정의되어 있던 것을 정리함)
- 다크모드: CSS 변수(`--q-bg` 등) + `[data-theme="dark"]`, `localStorage('q-theme')`

## 콘텐츠 보강 시 유의사항

- 새 문제를 추가할 때는 반드시 `npx tsx scripts/validate-questions.ts`로 ID 패턴(`p[1-3]c[1-3]_NNN`)과 스키마를 검증할 것 — 이 스크립트는 파일별·과목별 문항 수 집계도 함께 출력한다
- 챕터당 문제 수가 늘어나면 `lib/chapters.ts`의 `CHAPTERS` 배열 구조(id/part/chapter/title)는 그대로 두되, 각 항목의 `questionCount` 값만 검증 스크립트 출력값 기준으로 실제 문항 수와 다시 맞출 것 (자동 계산이 아닌 정적 값이므로 수동 동기화 필요)
- `sampleExamQuestions()`(랜덤 출제)는 매 챕터 문제 풀에서 과목별 목표 문항 수(1~2과목 10개, 3과목 30개)만큼 랜덤 샘플링하므로, 과목별 전체 문제 수가 목표치보다 적으면 문항 수가 줄어든다
- 화면에 노출되는 시험 규격 문구(`pages/quiz/exam.tsx`, `pages/quiz/index.tsx`의 50문항/100분/3과목, 모드 설명, 합격기준)는 ADsP 공식 기준이므로 실제 콘텐츠 보유량과 무관하게 그대로 유지한다 — 현재 보유 문항 수를 동적으로 노출하는 로직은 의도적으로 추가하지 않았다
- `mockexam/exam1.json`, `exam2.json`은 실제 필기시험 배점 비율(1과목 10·2과목 10·3과목 30, 총 50문항)을 그대로 반영해 작성되었다. exam1과 exam2는 같은 주제라도 서로 다른 세부 사실을 묻도록 의도적으로 분리했으므로, 추가 보강 시에도 이 원칙(비율 유지, 두 시험 간 비중복)을 지켜야 한다
- **3과목 R 배제 원칙은 모의고사뿐 아니라 `data/questions/part3_ch{1-3}.json` 챕터별 문제 풀 전체에 적용된다.** `sampleExamQuestions()`(랜덤 출제)는 챕터 문제 풀에서 그대로 샘플링하므로, 챕터 문제에 R 코드/함수/패키지 관련 문항이 남아 있으면 랜덤 출제에도 그대로 노출된다. 별도의 필터링 로직을 두지 않고 데이터 소스 자체를 R-프리하게 유지하는 방식을 채택했으므로, 3과목에 새 문제를 추가할 때는 R 관련 문항을 만들지 않아야 한다
