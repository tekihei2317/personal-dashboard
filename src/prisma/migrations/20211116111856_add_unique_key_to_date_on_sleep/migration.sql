/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Sleep` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Sleep_date_key` ON `Sleep`(`date`);
