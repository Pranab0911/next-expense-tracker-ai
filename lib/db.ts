import { PrismaClient } from "@/src/generated/client";
import { PrismaNeon } from "@prisma/adapter-neon";

declare global {
  var PRISMA: PrismaClient | null;
}

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });

export const db = globalThis.PRISMA || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.PRISMA = db;
}