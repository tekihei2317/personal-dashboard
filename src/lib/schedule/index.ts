import { updateCharactersCount } from './updateCharactersCount'
const schedule = require('node-schedule')

export function startScheduleJobs() {
  /** 1時間に1回、執筆文字数を更新する */
  schedule.scheduleJob('0 * * * *', function () {
    updateCharactersCount()
    console.log('執筆文字数を更新しました')
  })
}
