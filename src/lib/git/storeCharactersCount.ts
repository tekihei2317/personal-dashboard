import { formatDate } from '../date/formatDate'
import { getCharactersCount } from './getCharactersCount'

/** 最初のコミットから最新のコミットまでの日付について、文字数を取得する */
export function storeCharactersCount() {
  // TODO: コマンドで取得する
  const firstCommitDate = new Date('2021-11-29')
  const lastCommitDate = new Date('2021-12-07')

  for (let date = firstCommitDate; date <= lastCommitDate; date.setDate(date.getDate() + 1)) {
    const charactersCount = getCharactersCount(date)

    console.log([formatDate(date), charactersCount])
  }
}
