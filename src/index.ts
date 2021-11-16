import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const fs = require("fs");
const csv = require("csv");

async function main() {
  const parser = csv.parse(async (_: any, data: string[][]) => {
    const records = data;

    for (const record of records) {
      const [date, deepSleepTime, shallowSleepTime, _, awakeTime, bedTime] = record;

      // 一番最後に原因が分からない例外が出たためcatchしている
      await prisma.sleep
        .create({
          data: {
            date,
            deepSleepTime: Number(deepSleepTime),
            shallowSleepTime: Number(shallowSleepTime),
            awakeTime: new Date(awakeTime),
            bedTime: new Date(bedTime),
          },
        })
        .catch(() => {});
    }
  });

  fs.createReadStream("../imported-data/mifit/SLEEP/SLEEP_1636976201359.csv").pipe(parser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
