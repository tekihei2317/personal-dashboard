/*
  Warnings:

  - You are about to alter the column `date` on the `Sleep` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Date`.

*/
-- DropIndex
DROP INDEX `Sleep_date_key` ON `Sleep`;

-- AlterTable
ALTER TABLE `Sleep` MODIFY `date` DATE NOT NULL;
