/*
  Warnings:

  - You are about to drop the column `userid` on the `Certificate` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_userid_fkey";

-- DropIndex
DROP INDEX "Certificate_userid_idx";

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "userid";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "UserRole";
