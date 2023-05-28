-- CreateEnum
CREATE TYPE "Role" AS ENUM ('VENATOR', 'VETUS', 'MEMBER', 'CANDIDATE');

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
