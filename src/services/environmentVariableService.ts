export class EnvironmentVariableService {
  get(key: string) {
    const value = process.env[key]

    if (value === undefined) {
      throw new Error(`環境変数${key}が存在しません`)
    }

    return value
  }
}
