/*
  Warnings:

  - A unique constraint covering the columns `[recordedAt]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Activity_recordedAt_key` ON `Activity`(`recordedAt`);
