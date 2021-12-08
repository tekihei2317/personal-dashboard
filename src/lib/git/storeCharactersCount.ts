import { PrismaClient } from '@prisma/client'
import { formatDate } from '../date/formatDate'
import { getCharactersCount } from './getCharactersCount'

const prisma = new PrismaClient()

/** 最初のコミットから最新のコミットまでの日付について、文字数を取得する */
export async function storeCharactersCount() {
  // TODO: コマンドで取得する
  const firstCommitDate = new Date('2021-11-29')
  const lastCommitDate = new Date('2021-12-07')

  for (let date = firstCommitDate; date <= lastCommitDate; date.setDate(date.getDate() + 1)) {
    const characterCount = getCharactersCount(date)

    await prisma.writing.create({
      data: {
        characterCount: characterCount,
        recordedAt: date,
      },
    })

    console.log(characterCount, date)
  }
}
