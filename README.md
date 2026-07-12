# ADsP Master 🎓

**ADsP(데이터분석 준전문가)** 자격증 시험 준비를 위한 **웹 기반 학습 플랫폼**입니다.
이론 학습 + 단원별 문제 풀이 + 모의고사를 한 곳에서 제공합니다.

> 이 저장소는 기존 DAsP(데이터아키텍처 준전문가) 학습 사이트의 구조를 재사용하여 ADsP 콘텐츠로 전환한 버전입니다. 공식 ADsP 출제범위 체크리스트 기준으로 전체 콘텐츠를 점검하여 데이터베이스 4대 특징, 빅데이터 가치 산정이 어려운 이유, 확률의 기본개념, 데이터웨어하우스 4대 특성(Inmon) 등 빠져 있던 토픽을 보강했으며, 모든 챕터가 15문항 이상으로 균형 있게 채워져 있습니다. 모의고사(exam1·exam2)는 실제 필기시험 과목별 배점 비율(1과목 10 · 2과목 10 · 3과목 30, 총 50문항)에 맞춰 전면 재작성되었으며, 최근 출제 경향을 반영해 3과목에서 R 코드/함수 관련 문항은 배제했습니다.

---

## 📖 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **용도** | ADsP(데이터분석 준전문가) 시험 준비 |
| **학습 과목** | 3과목 (데이터 이해 · 데이터분석 기획 · 데이터분석) |
| **총 챕터** | 8개 챕터 |
| **챕터 문제** | 165문항 (챕터별 15~25문항) |
| **모의고사** | 50문항 × 2회 (exam1·exam2, 1과목 10·2과목 10·3과목 30 비율 반영) |
| **주요 기능** | 이론 학습, 단원별 풀이, 모의고사(3가지 모드), 오답 노트, 북마크, 이어서 풀기 |
| **진도 추적** | localStorage 기반 (로그인 불필요) |
| **배포 환경** | Vercel / Next.js SSG |

---

## 🎯 ADsP 시험 구조

| 과목 | 제목 | 문항 | 배점 |
|------|------|------|------|
| 1과목 | 데이터 이해 | 10문항 | 20점 (문항당 2점) |
| 2과목 | 데이터분석 기획 | 10문항 | 20점 (문항당 2점) |
| 3과목 | 데이터분석 | 30문항 | 60점 (문항당 2점) |
| **합계** | | **50문항** | **100점 / 100분** |

**합격 기준**: 전체 60점 이상 + 각 과목 40% 이상 (과락 없이)

---

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev
```

### 주요 명령어

```bash
npm run dev          # 개발 서버 (hot reload)
npm run build        # SSG 빌드
npm run lint         # ESLint 검사
npm run type-check   # TypeScript 타입 검사
npm run test         # Vitest 단위 테스트 (1회)
npm run test:watch   # Vitest (watch 모드)
```

---

## 🎓 주요 기능

### 📚 이론 학습 (`/theory`)
- **8개 챕터** — 공식 출제 범위 주요항목 기준 구성
- **마크다운 기반** — 표·예시·출제 포인트 포함
- **TOC(목차)** — 섹션별 빠른 이동
- **관련 문제 미리보기** — 이론 → 문제 풀기 자연스러운 연계

### 🎯 문제 풀이 (`/quiz`)
- **단원별 풀기** — 8개 챕터별 순차 풀이, 정답 즉시 확인
- **오답 노트** — 틀린 문제만 모아서 반복 학습
- **북마크** — 중요 문제 따로 정리
- **키보드 단축키** — 선택지 1~4키 빠른 선택

### 📝 모의고사 (`/quiz/exam`)
- **3가지 출제 모드** 선택 가능:
  - 모의고사 1회 — 고정 50문항 세트 (1과목 10·2과목 10·3과목 30, R 관련 문항 배제)
  - 모의고사 2회 — 고정 50문항 세트 (exam1과 중복되지 않는 별도 문항)
  - 랜덤 출제 — 매회 챕터 풀에서 새로운 문제 조합 (1~2과목 10문항, 3과목 30문항)
- **100분 타이머** — 실전 동일 조건
- **이어서 풀기** — 이탈 후 재진입해도 진행 상황 자동 복원 (localStorage 세션)
- **과목별 점수** — 1~3과목 개별 점수 및 합격/불합격 판정
- **문제 네비게이터** — 그리드로 풀이 상태 시각화

### 📊 대시보드 (`/`)
- **히어로 배너** — 전체 정답률, 현재 진도 요약
- **학습 경로** — 8개 챕터 버블 진행 상황 (완료·진행중·잠금)
- **챕터별 진도** — 3과목 컬러 구분 진도 바
- **취약 챕터** — 정답률 낮은 상위 챕터 파악
- **과목별 정답률** — 원형 차트로 시각화

---

## 📁 콘텐츠 구성

### 이론 파일 (8개)

| 챕터 ID | 과목 | 주요항목 |
|---------|------|---------|
| `part1_ch1` | 1과목 데이터 이해 | 데이터의 이해 (데이터/정보/지식, DIKW 피라미드, SECI 모델) |
| `part1_ch2` | 1과목 데이터 이해 | 데이터의 가치와 미래 (빅데이터 3V/5V, 위기요인) |
| `part1_ch3` | 1과목 데이터 이해 | 가치 창조를 위한 데이터 사이언스와 전략 인사이트 |
| `part2_ch1` | 2과목 데이터분석 기획 | 데이터분석 기획의 이해 (KDD·CRISP-DM·SEMMA, 하향식/상향식) |
| `part2_ch2` | 2과목 데이터분석 기획 | 분석 마스터플랜 (우선순위·로드맵·거버넌스) |
| `part3_ch1` | 3과목 데이터분석 | R 기초와 데이터 마트 |
| `part3_ch2` | 3과목 데이터분석 | 통계분석 (확률분포·가설검정·회귀·시계열) |
| `part3_ch3` | 3과목 데이터분석 | 정형 데이터 마이닝 (분류·군집·연관분석) |

### 문제 현황

| 구분 | 파일 | 문항 수 |
|------|------|--------|
| 1과목 | part1_ch1~ch3 | 17 + 22 + 20 = **59문항** |
| 2과목 | part2_ch1~ch2 | 21 + 24 = **45문항** |
| 3과목 | part3_ch1~ch3 | 15 + 25 + 21 = **61문항** |
| **챕터 합계** | | **165문항** |
| 모의고사 1회 | exam1.json | 50문항 (1과목 10·2과목 10·3과목 30) |
| 모의고사 2회 | exam2.json | 50문항 (1과목 10·2과목 10·3과목 30, exam1과 중복되지 않는 별도 문항) |
| **총 문항** | | **265문항** |

> `npx tsx scripts/validate-questions.ts` 실행 시 파일별·과목별 문항 수가 콘솔에 출력되므로, 콘텐츠를 보강한 뒤에는 이 표를 그 출력값 기준으로 다시 맞추면 된다.

---

## 🛠 기술 스택

| 영역 | 기술 | 설명 |
|------|------|------|
| 프레임워크 | **Next.js 14** | Pages Router, SSG |
| 언어 | **TypeScript** | strict 모드 |
| 스타일링 | **Tailwind CSS** | 인디고/블루 팔레트 (#6366F1) |
| 상태 관리 | **React Context** | useProgress 훅 |
| 저장소 | **localStorage** | dasp_progress, dasp_exam_session |
| 마크다운 | **react-markdown** | rehype-highlight 코드 하이라이팅 |
| 테스트 | **Vitest + jsdom** | 단위 테스트 |
| 배포 | **Vercel** | Next.js 최적화 호스팅 |

---

## 📁 프로젝트 구조

```
adsp/
├── pages/
│   ├── _app.tsx                    ← ProgressProvider + Layout
│   ├── index.tsx                   ← 대시보드 홈
│   ├── theory/
│   │   ├── index.tsx               ← 이론 목차 (3과목 그리드)
│   │   └── [chapterId].tsx         ← 이론 본문 (SSG, 8개 경로)
│   └── quiz/
│       ├── index.tsx               ← 문제풀기 허브
│       ├── chapter/[chapterId].tsx ← 단원별 풀이 (SSG, 8개 경로)
│       ├── exam.tsx                ← 모의고사 (3가지 모드, 세션 영속화)
│       ├── result.tsx              ← 결과 (3과목별 점수)
│       ├── wrong.tsx               ← 오답 노트
│       └── bookmarks.tsx           ← 북마크
│
├── components/
│   ├── layout/Layout.tsx, TopBar.tsx
│   ├── ui/Mascot.tsx, Badge.tsx    ← 마스코트, 게이미피케이션 배지
│   ├── quiz/
│   │   ├── QuestionCard.tsx        ← 문제 카드 + 키보드 단축키
│   │   ├── AnswerFeedback.tsx      ← 정답/오답 + 해설
│   │   ├── QuizNavigator.tsx       ← 문제 번호 그리드
│   │   └── ExamTimer.tsx           ← 카운트다운 타이머
│   ├── theory/
│   │   ├── TheoryContent.tsx       ← 마크다운 렌더링
│   │   ├── TheoryTOC.tsx           ← 목차 (IntersectionObserver)
│   │   └── RelatedQuestions.tsx    ← 관련 문제 미리보기
│   └── dashboard/
│       ├── HeroBanner.tsx, LearningPath.tsx
│       ├── ChapterProgress.tsx, WeakChapters.tsx
│       ├── WeeklyXP.tsx, ProgressChart.tsx
│       └── MascotCard.tsx
│
├── lib/
│   ├── chapters.ts     ← CHAPTERS 배열 (8개, 유일한 챕터 소스)
│   ├── questions.ts    ← 문제 로드·필터링·모의고사 샘플링
│   ├── theory.ts       ← 이론 마크다운 로드
│   └── progress.ts     ← localStorage CRUD + 시험 세션 영속화
│
├── context/
│   └── ProgressContext.tsx   ← useProgress 훅 (답변·북마크·XP·스트릭)
│
├── types/
│   └── index.ts              ← Question, ExamResult, ExamSession 등
│
├── data/
│   ├── theory/               ← 8개 이론 마크다운 (part{1-3}_ch{1-3}.md)
│   └── questions/
│       ├── part{1-3}_ch{1-3}.json  ← 8개 챕터 문제
│       └── mockexam/
│           ├── exam1.json    ← 모의고사 1회 (50문항)
│           └── exam2.json    ← 모의고사 2회 (50문항, exam1과 별도 문항)
│
├── scripts/
│   └── validate-questions.ts ← JSON 스키마 검증
│
├── backup_dasp_20260712/     ← 이전 DAsP 콘텐츠 백업 (data, README, CLAUDE.md)
├── CLAUDE.md                 ← 개발자 가이드 (Claude Code용)
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🔄 핵심 데이터 흐름

### 진도 추적
```
사용자 선택지 선택
    ↓
QuestionCard → handleAnswer()
    ↓
ProgressContext.markAnswer()
    ↓
lib/progress.ts → localStorage('dasp_progress') 저장
    ↓
getStats() 계산 → Dashboard 반영
```

### 모의고사 세션 영속화
```
시험 시작 → 문제 로드 + 세션 저장 (dasp_exam_session)
    ↓
답변/이동 시마다 자동 저장
    ↓
이탈 후 재진입
    ↓
인트로 화면에 "이어서 풀기" 배너 표시
    ↓
클릭 → examEndTime 기반 남은 시간 계산 + 상태 복원
    ↓
제출 → 세션 삭제 + 결과 저장 (dasp_progress.examHistory)
```

### ID 형식 규칙
| 용도 | 형식 | 예시 |
|------|------|------|
| 파일명·라우팅 | `part{N}_ch{M}` | `part3_ch2` |
| 챕터 문제 ID | `p{N}c{M}_{3자리}` | `p3c2_001` |
| 모의고사 ID | `exam{N}_{3자리}` | `exam1_006` |

---

## 🗂 데이터 모델

```typescript
// 핵심 타입 (types/index.ts)
interface Question {
  id: string              // "p2c1_001"
  part: 1 | 2 | 3
  chapter: string         // "part2_ch1"
  content: string
  options: string[]       // 4지선다
  answer: number          // 0-3
  explanation: string
  tags?: string[]
  difficulty?: '하' | '중' | '상'
  questionType?: 'concept' | 'result' | 'completion' | 'error'
}

interface ExamResult {
  date: string
  score: number
  part1Score: number
  part2Score: number
  part3Score: number
  totalTime: number
  answers: Record<string, number>
}

interface ExamSession {   // 모의고사 이탈 복원용
  mode: 'random' | 'exam1' | 'exam2'
  questions: Question[]
  currentIndex: number
  answers: Record<number, { selectedIndex: number; result: AnswerResult }>
  examEndTime: number     // 절대 만료 시각 (ms)
}
```

---

## 🔐 데이터 저장 구조 (localStorage)

| 키 | 내용 |
|----|------|
| `dasp_progress` | 답변 기록, 북마크, 모의고사 이력 (최근 10개) |
| `dasp_exam_session` | 진행 중 모의고사 세션 (이탈 복원용) |
| `q-theme` | 다크모드 설정 (`'dark'` \| `'light'`) |

---

## 🎨 UI/UX 특징

- **다크모드** — CSS 변수(`--q-bg` 등) + `[data-theme="dark"]` 전환
- **반응형** — 모바일·태블릿·데스크톱 최적화
- **게이미피케이션** — 스트릭(🔥), 보석(💎), XP(⚡) 배지
- **마스코트** — 인디고 컬러 SVG 캐릭터 (표정 3가지)
- **키보드 단축키** — 문제 풀이 중 1~4키로 선택지 선택

---

## 🧪 개발 및 검증

```bash
# 타입 검사
npm run type-check

# ESLint
npm run lint

# 단위 테스트
npm run test

# 전체 빌드 + SSG 생성
npm run build

# 단일 테스트 파일
npx vitest run lib/chapters.test.ts
```

---

## ⚠️ 알려진 제한사항

1. **기기별 독립 저장** — 다른 기기에서 진도 불러오기 불가 (localStorage 기반)
2. **오프라인 미지원** — 네트워크 필요 (SSG이므로 초기 로드 후 일부 기능 가능)

---

## 📄 라이선스

MIT License

---

**마지막 업데이트**: 2026-07-12
**버전**: 3.0.0-scaffold (DAsP → ADsP 전환)
**상태**: 🚧 콘텐츠 보강 중
