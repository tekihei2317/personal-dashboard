import { PrismaClient } from '@prisma/client'
import { getCharactersCount } from './getCharactersCount'

const prisma = new PrismaClient()

/** 最初のコミットから最新のコミットまでの日付について、文字数を取得する */
export async function storeCharactersCount(first = '2021-11-29', last = '2021-12-12') {
  const firstDate = new Date(first)
  const lastDate = new Date(last)

  for (let date = firstDate; date <= lastDate; date.setDate(date.getDate() + 1)) {
    const characterCount = getCharactersCount(date)

    await prisma.writing.upsert({
      where: {
        recordedAt: date,
      },
      update: {
        characterCount: characterCount,
      },
      create: {
        recordedAt: date,
        characterCount: characterCount,
      },
    })

    console.log(characterCount, date)
  }
}
