import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    initialContent: v.optional(v.string()),
    ownerId: v.string(),
    roomId: v.optional(v.string()),
    organizationId: v.optional(v.string()),
  })
    .index("by_owner_id", ["ownerId"])
    .index("by_organization_id", ["organizationId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["ownerId", "organizationId"],
    }),

  // Create a table for document versions
  document_versions: defineTable({
    documentId: v.id("documents"), // Link to the documents table
    title: v.string(), // Title at the time of versioning
    content: v.string(), // Content at the time of versioning
    createdAt: v.number(), // Timestamp when the version was created
  })
    .index("by_document_id", ["documentId"])
});
