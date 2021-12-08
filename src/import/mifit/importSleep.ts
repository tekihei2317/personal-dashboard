import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const fs = require('fs')
const csv = require('csv')

export async function importSleep() {
  const parser = csv.parse(async (_: any, data: string[][]) => {
    const records = data.slice(1)

    for (const record of records) {
      const [date, deepSleepTime, shallowSleepTime, _, awakeTime, bedTime] = record

      await prisma.sleep.create({
        data: {
          date: new Date(date),
          deepSleepTime: Number(deepSleepTime),
          shallowSleepTime: Number(shallowSleepTime),
          awakeTime: new Date(awakeTime),
          bedTime: new Date(bedTime),
        },
      })
    }
  })

  fs.createReadStream('../imported-data/mifit/SLEEP/SLEEP_1636976201359.csv').pipe(parser)
}
