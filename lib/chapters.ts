import type { ChapterMeta } from '@/types'

export interface ChapterDef extends ChapterMeta {
  idPrefix: string
}

export const CHAPTERS: ChapterDef[] = [
  // 1과목: 데이터 이해
  { id: 'part1_ch1', part: 1, chapter: 1, title: '데이터의 이해',                                idPrefix: 'p1c1_', questionCount: 15 },
  { id: 'part1_ch2', part: 1, chapter: 2, title: '데이터의 가치와 미래',                          idPrefix: 'p1c2_', questionCount: 20 },
  { id: 'part1_ch3', part: 1, chapter: 3, title: '가치 창조를 위한 데이터 사이언스와 전략 인사이트', idPrefix: 'p1c3_', questionCount: 20 },
  // 2과목: 데이터분석 기획
  { id: 'part2_ch1', part: 2, chapter: 1, title: '데이터분석 기획의 이해',   idPrefix: 'p2c1_', questionCount: 20 },
  { id: 'part2_ch2', part: 2, chapter: 2, title: '분석 마스터플랜',          idPrefix: 'p2c2_', questionCount: 22 },
  // 3과목: 데이터분석
  { id: 'part3_ch1', part: 3, chapter: 1, title: 'R 기초와 데이터 마트',    idPrefix: 'p3c1_', questionCount: 3 },
  { id: 'part3_ch2', part: 3, chapter: 2, title: '통계분석',                idPrefix: 'p3c2_', questionCount: 20 },
  { id: 'part3_ch3', part: 3, chapter: 3, title: '정형 데이터 마이닝',      idPrefix: 'p3c3_', questionCount: 21 },
]

export const CHAPTERS_BY_PART: Record<number, ChapterDef[]> = {
  1: CHAPTERS.filter(c => c.part === 1),
  2: CHAPTERS.filter(c => c.part === 2),
  3: CHAPTERS.filter(c => c.part === 3),
}

export const CHAPTER_IDS = CHAPTERS.map(c => c.id)

export const CHAPTER_BY_ID: Record<string, ChapterDef> = Object.fromEntries(
  CHAPTERS.map(c => [c.id, c])
)

export function getChapterById(id: string): ChapterDef | undefined {
  return CHAPTER_BY_ID[id]
}

export function getChapterTitle(id: string): string {
  return CHAPTER_BY_ID[id]?.title ?? id
}

export function getChapterFullLabel(id: string): string {
  const c = CHAPTER_BY_ID[id]
  if (!c) return id
  return `${c.part}과목 ${c.chapter}장 - ${c.title}`
}

export function getChapterIdByQuestionId(questionId: string): string | undefined {
  return CHAPTERS.find(c => questionId.startsWith(c.idPrefix))?.id
}

export const PART_TITLES: Record<number, string> = {
  1: '데이터 이해',
  2: '데이터분석 기획',
  3: '데이터분석',
}
