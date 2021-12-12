import { storeCharactersCount } from '../git/storeCharactersCount'
import { formatDate } from '../date/formatDate'
import { addDays } from 'date-fns'
import { EnvironmentVariableService } from '../../services/environmentVariableService'
import { RepositoryManager } from '../git/repositoryManager'

/** 1週間分の文字数を更新する */
export function updateCharactersCount() {
  pullChanges()

  const startDate = formatDate(addDays(new Date(), -6))
  const endDate = formatDate(new Date())
  storeCharactersCount(startDate, endDate)
}

/** リポジトリの変更をpullする */
function pullChanges() {
  const envService = new EnvironmentVariableService()
  const repositoryPath = envService.get('OBSIDIAN_REPOSITORY_PATH')
  const repositoryManager = new RepositoryManager(repositoryPath)

  repositoryManager.pullChanges()
}
