/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `state` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TaskStatusEnum" AS ENUM ('NAO_INICIADA', 'EM_PROGRESSO', 'FINALIZADA');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "state",
ADD COLUMN     "state" "TaskStatusEnum" NOT NULL;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";
