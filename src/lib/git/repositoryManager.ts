import { execSync } from 'child_process'

export class RepositoryManager {
  private repositoryPath: string

  constructor(repositoryPath: string) {
    this.repositoryPath = repositoryPath
  }

  /** 変更をプルする */
  public pullChanges() {
    this.execCommand('git pull')
  }

  /** リポジトリの場所でコマンドを実行する */
  public execCommand(command: string) {
    const originalDirectory = this.prepareForCommand()
    const result = execSync(command).toString().trim()

    process.chdir(originalDirectory)

    return result
  }

  private prepareForCommand() {
    const originalDirectory = process.cwd()
    process.chdir(this.repositoryPath)

    return originalDirectory
  }
}
