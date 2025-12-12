/*
  Warnings:

  - You are about to drop the column `details` on the `WatchLog` table. All the data in the column will be lost.
  - Changed the type of `action` on the `WatchLog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WatcherAction" AS ENUM ('delete_thread', 'ban_ip', 'announcement');

-- AlterTable
ALTER TABLE "WatchLog" DROP COLUMN "details",
ADD COLUMN     "desc" TEXT,
DROP COLUMN "action",
ADD COLUMN     "action" "WatcherAction" NOT NULL;
