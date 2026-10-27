CREATE TABLE `business_settings` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `collection_overrides` (
	`slug` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`audience` text NOT NULL,
	`options` text NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`contact_method` text NOT NULL,
	`collection` text NOT NULL,
	`tailoring_for` text NOT NULL,
	`preferred_date` text,
	`preferred_time` text,
	`event_date` text,
	`message` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `gallery_items` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`image_url` text NOT NULL,
	`alt` text NOT NULL,
	`category` text NOT NULL,
	`audience` text NOT NULL,
	`is_demo` integer DEFAULT true NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rate_limits` (
	`key` text PRIMARY KEY NOT NULL,
	`last_request_at` integer NOT NULL
);
