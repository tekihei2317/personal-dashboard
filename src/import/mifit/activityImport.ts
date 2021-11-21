import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const fs = require("fs");
const csv = require("csv");

const parser = csv.parse(async (_: any, data: string[][]) => {
  const records = data.slice(1);

  for (const record of records) {
    const [recordedDate, steps, distance, runDistance, calories] = record;

    await prisma.activity.create({
      data: {
        recordedAt: new Date(recordedDate),
        steps: Number(steps),
        distance: Number(distance),
        calories: Number(calories),
      },
    });
  }
});

fs.createReadStream("../imported-data/mifit/ACTIVITY/ACTIVITY_1636976201225.csv").pipe(parser);
