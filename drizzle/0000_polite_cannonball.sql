CREATE TABLE `speaking_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`displayName` varchar(96) DEFAULT '刘涵',
	`currentBand` varchar(16),
	`targetBand` varchar(16) DEFAULT '7.0',
	`strengths` text,
	`weakAreas` text,
	`interests` text,
	`personalContext` text,
	`preferredFeedback` varchar(32) DEFAULT 'balanced',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `speaking_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `speaking_profiles_user_unique` UNIQUE(`userId`)
);
--> statement-breakpoint
CREATE TABLE `speaking_training_runs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`promptId` varchar(96) NOT NULL,
	`promptTitle` text NOT NULL,
	`speakingPart` varchar(12) NOT NULL,
	`sourceWindow` varchar(64),
	`linkedStoryId` varchar(48),
	`linkedFramework` varchar(48),
	`learnerDraft` text,
	`aiAnswer` text,
	`aiFeedback` text,
	`status` enum('draft','completed','failed') NOT NULL DEFAULT 'draft',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `speaking_training_runs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('admin','user') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
--> statement-breakpoint
CREATE INDEX `speaking_runs_user_created` ON `speaking_training_runs` (`userId`,`createdAt`);