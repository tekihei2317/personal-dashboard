import { execSync } from 'child_process'
import { addDays } from 'date-fns'
import { formatDate } from '../date/formatDate'

/** 指定した日時の文字数を取得する */
export function getCharactersCount(date: Date) {
  const originalDirectory = prepare()

  const beginHash = getCommitHashByDate(date)
  const endHash = getCommitHashByDate(addDays(date, 1))
  const charactersCount = calcCharactersCount(beginHash, endHash)

  cleanup(originalDirectory)

  return charactersCount
}

/** 指定した日付以前(指定した日付は含まない)の最新のコミットを取得する */
function getCommitHashByDate(date: Date) {
  // TODO: beforeの範囲に存在しない場合は実行結果が空文字になるので、修正する
  const command = `git log --before '${formatDate(date)} 00:00:00 +09:00' --pretty='format:%H' | head -n 1`

  return execSync(command).toString().trim()
}

function calcCharactersCount(beginHash: string, endHash: string) {
  const command = `git diff ${beginHash}..${endHash} | grep "^\+[^\+]" | cut -c 2- | sed -e "s/[^亜-熙ぁ-んァ-ヶ]//g" | sed -e /^$/d | wc -m`

  return Number(execSync(command).toString().trim())
}

function prepare() {
  const originalDirectory = process.cwd()

  // TODO: クラスやメソッドを通してアクセスするようにする
  const repositoryPath = process.env.OBSIDIAN_REPOSITORY_PATH
  if (repositoryPath === undefined) {
    throw new Error('環境変数OBSIDIAN_REPOSITORY_PATHが設定されていません')
  }
  process.chdir(repositoryPath)

  return originalDirectory
}

function cleanup(originalDirectory: string) {
  process.chdir(originalDirectory)
}
