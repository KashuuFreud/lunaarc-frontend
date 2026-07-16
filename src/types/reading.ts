import type { TarotCard } from './tarot'   // ✅ 现在可以正常导入

export interface ReadingResult {
  summary: string
  cards: TarotCard[]
  connections: string
  advice: string[]
  reflectionQuestion: string
  disclaimer: string
}