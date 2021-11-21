/*
  Warnings:

  - Added the required column `deepSleepTime` to the `Sleep` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shallowSleepTime` to the `Sleep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sleep` ADD COLUMN `deepSleepTime` INTEGER NOT NULL,
    ADD COLUMN `shallowSleepTime` INTEGER NOT NULL;
