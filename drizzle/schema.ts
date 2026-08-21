import { index, int, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

/** Core Manus-authenticated account. */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["admin", "user"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

/** One editable voice profile per learner; text fields deliberately keep sensitive personal notes minimal and user-controlled. */
export const speakingProfiles = mysqlTable(
  "speaking_profiles",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("userId").notNull(),
    displayName: varchar("displayName", { length: 96 }).default("刘涵"),
    currentBand: varchar("currentBand", { length: 16 }),
    targetBand: varchar("targetBand", { length: 16 }).default("7.0"),
    strengths: text("strengths"),
    weakAreas: text("weakAreas"),
    interests: text("interests"),
    personalContext: text("personalContext"),
    preferredFeedback: varchar("preferredFeedback", { length: 32 }).default("balanced"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  table => [uniqueIndex("speaking_profiles_user_unique").on(table.userId)],
);

/** A compact history of training inputs and generated feedback; raw audio is intentionally not stored here. */
export const speakingTrainingRuns = mysqlTable(
  "speaking_training_runs",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("userId").notNull(),
    promptId: varchar("promptId", { length: 96 }).notNull(),
    promptTitle: text("promptTitle").notNull(),
    speakingPart: varchar("speakingPart", { length: 12 }).notNull(),
    sourceWindow: varchar("sourceWindow", { length: 64 }),
    linkedStoryId: varchar("linkedStoryId", { length: 48 }),
    linkedFramework: varchar("linkedFramework", { length: 48 }),
    learnerDraft: text("learnerDraft"),
    aiAnswer: text("aiAnswer"),
    aiFeedback: text("aiFeedback"),
    status: mysqlEnum("status", ["draft", "completed", "failed"]).default("draft").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  table => [index("speaking_runs_user_created").on(table.userId, table.createdAt)],
);

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type SpeakingProfile = typeof speakingProfiles.$inferSelect;
export type InsertSpeakingProfile = typeof speakingProfiles.$inferInsert;
export type SpeakingTrainingRun = typeof speakingTrainingRuns.$inferSelect;
export type InsertSpeakingTrainingRun = typeof speakingTrainingRuns.$inferInsert;
