import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const enquiries = sqliteTable("enquiries", {
  id: text("id").primaryKey(),
  type: text("type").notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  contactMethod: text("contact_method").notNull(),
  collection: text("collection").notNull(),
  tailoringFor: text("tailoring_for").notNull(),
  preferredDate: text("preferred_date"),
  preferredTime: text("preferred_time"),
  eventDate: text("event_date"),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const businessSettings = sqliteTable("business_settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const collectionOverrides = sqliteTable("collection_overrides", {
  slug: text("slug").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  audience: text("audience").notNull(),
  options: text("options").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const galleryItems = sqliteTable("gallery_items", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  alt: text("alt").notNull(),
  category: text("category").notNull(),
  audience: text("audience").notNull(),
  isDemo: integer("is_demo", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const rateLimits = sqliteTable("rate_limits", {
  key: text("key").primaryKey(),
  lastRequestAt: integer("last_request_at", { mode: "timestamp_ms" }).notNull(),
});
