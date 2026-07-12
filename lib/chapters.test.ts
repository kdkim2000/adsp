import { describe, it, expect } from 'vitest'
import { CHAPTERS, getChapterById, getChapterTitle, getChapterIdByQuestionId, CHAPTER_IDS } from './chapters'

describe('chapters', () => {
  it('should have 8 chapters', () => {
    expect(CHAPTERS).toHaveLength(8)
  })

  it('should have correct chapter counts per part', () => {
    expect(CHAPTERS.filter(c => c.part === 1)).toHaveLength(3)
    expect(CHAPTERS.filter(c => c.part === 2)).toHaveLength(2)
    expect(CHAPTERS.filter(c => c.part === 3)).toHaveLength(3)
  })

  it('getChapterById returns correct chapter with official title', () => {
    const ch1 = getChapterById('part3_ch1')
    expect(ch1?.title).toBe('R 기초와 데이터 마트')
    expect(ch1?.part).toBe(3)

    const ch3 = getChapterById('part3_ch3')
    expect(ch3?.title).toBe('정형 데이터 마이닝')
    expect(ch3?.chapter).toBe(3)

    const p2c2 = getChapterById('part2_ch2')
    expect(p2c2?.title).toBe('분석 마스터플랜')
    expect(p2c2?.part).toBe(2)
  })

  it('getChapterTitle returns official title', () => {
    expect(getChapterTitle('part1_ch1')).toBe('데이터의 이해')
    expect(getChapterTitle('part1_ch2')).toBe('데이터의 가치와 미래')
    expect(getChapterTitle('part2_ch1')).toBe('데이터분석 기획의 이해')
    expect(getChapterTitle('part3_ch2')).toBe('통계분석')
    expect(getChapterTitle('part3_ch3')).toBe('정형 데이터 마이닝')
  })

  it('getChapterIdByQuestionId works for each part prefix', () => {
    expect(getChapterIdByQuestionId('p1c1_001')).toBe('part1_ch1')
    expect(getChapterIdByQuestionId('p3c1_001')).toBe('part3_ch1')
    expect(getChapterIdByQuestionId('p2c2_001')).toBe('part2_ch2')
  })

  it('part4 chapters are not included', () => {
    expect(getChapterById('part4_ch1')).toBeUndefined()
    expect(getChapterById('part2_ch3')).toBeUndefined()
    expect(getChapterById('part3_ch4')).toBeUndefined()
  })

  it('all chapter ids are unique', () => {
    expect(new Set(CHAPTER_IDS).size).toBe(CHAPTER_IDS.length)
  })

  it('all idPrefixes are unique', () => {
    const prefixes = CHAPTERS.map(c => c.idPrefix)
    expect(new Set(prefixes).size).toBe(prefixes.length)
  })
})
