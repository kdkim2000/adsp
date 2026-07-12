# 01. 현재 콘텐츠 vs 문항수 정합성 수정

**날짜**: 2026-07-12
**배경**: DAsP → ADsP 구조 전환(8챕터/3과목 스캐폴딩) 이후, 백그라운드 콘텐츠 생성 과정이 이론·문제 파일을 지속적으로 보강하면서 실제 문항 수가 애초 문서화했던 수치(43개)보다 커졌다. 콘텐츠 자체(품질·분량)는 이후 별도로 계속 보강할 예정이며, 이번 작업은 **그 사이 벌어진 "문항 수" 관련 메타데이터·문서의 정합성만** 현재 시점 기준으로 맞추는 것이 목적이다. 사용자 화면에 노출되는 ADsP 공식 시험 규격(50문항/100분/3과목, 합격기준, 모드 설명 문구)은 콘텐츠 보유량과 무관하게 그대로 유지했다.

## 조사 결과 (수정 전 상태)

| 파일 | 상태 | 문항수 |
|---|---|---|
| data/questions/part1_ch1.json | 정상 | 15 |
| data/questions/part1_ch2.json | 조사 시점엔 유효 배열(20문항) 뒤에 생성기 잔재(마크다운 코드펜스, 미완성 중복 배열)가 붙어 JSON 파싱 실패 상태였으나, 실제 수정 시점엔 백그라운드 프로세스가 이미 자체적으로 정리하여 유효한 JSON(20문항)이었음 | 20 |
| data/questions/part1_ch3.json | 정상 | 2 |
| data/questions/part2_ch1.json | 정상 | 2 |
| data/questions/part2_ch2.json | 정상 | 2 |
| data/questions/part3_ch1.json | 정상 | 3 |
| data/questions/part3_ch2.json | 정상 | 2 |
| data/questions/part3_ch3.json | 정상 | 3 |
| data/questions/mockexam/exam1.json | 정상 | 6 |
| data/questions/mockexam/exam2.json | 정상 | 6 |

- `lib/chapters.ts`의 8개 챕터 `questionCount` 필드가 전부 `0`으로 하드코딩되어 있었고, 코드 전체에서 이 값을 읽는 곳이 없었음(죽은 데이터).
- `scripts/validate-questions.ts`는 개별 문항 스키마만 검증하고 챕터/과목별 집계는 출력하지 않았음.

## 수정 내역

1. **`data/questions/part1_ch2.json`**: 수정 시점 재확인 결과 이미 유효한 JSON(20문항, p1c2_001~020)으로 자체 정리되어 있어 별도 조치 불필요.
2. **`lib/chapters.ts`**: 8개 챕터의 `questionCount`를 실측치로 동기화 (15/20/2/2/2/3/2/3).
3. **`scripts/validate-questions.ts`**: 검증 통과 시 "파일별 문항 수"와 "과목별 문항 수" 집계표를 콘솔에 추가 출력하도록 보강 (합격/실패 기준 자체는 변경하지 않음 — 개별 스키마 검증 로직 그대로).
4. **`README.md`, `CLAUDE.md`**: "문제 현황" 표를 최신 실측치(챕터 합계 49문항, 모의고사 12문항, 총 61문항)로 갱신. ADsP 공식 시험 구조 표(50문항/100분/3과목/배점/합격기준)는 변경하지 않음.
5. **변경하지 않은 것**: `pages/quiz/exam.tsx`·`pages/quiz/index.tsx`의 화면 문구(스탯 카드, 모드 설명, 합격기준), `sampleExamQuestions()`의 목표 카운트(10/10/30) 로직, 문항 콘텐츠 자체.

## 검증

- `npx tsx scripts/validate-questions.ts` → 파일 10개, 문제 61개, 고유 ID 61개, 오류 0건. 파일별·과목별 집계표 정상 출력 (1과목 41개, 2과목 8개, 3과목 12개).
- `npm run type-check` → 통과
- `npm run test` (vitest) → 통과
- `npm run build` (Next.js SSG) → 통과

## 향후 콘텐츠 보강 시 반복 절차

콘텐츠(이론·문제)를 추가로 보강한 뒤에는 다음 순서로 문항 수 정합성을 다시 맞춘다:

1. `npx tsx scripts/validate-questions.ts` 실행 → 파일별·과목별 최신 문항 수 확인
2. `lib/chapters.ts`의 각 챕터 `questionCount`를 그 출력값으로 갱신
3. `README.md`/`CLAUDE.md`의 "문제 현황" 표를 최신 합계로 갱신 (공식 시험 규격 섹션은 그대로 둠)
4. `npm run type-check && npm run test && npm run build`로 회귀 확인
