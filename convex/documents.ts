// // import { ConvexError, v } from "convex/values";
// // import { paginationOptsValidator } from "convex/server";

// // import { mutation, query } from "./_generated/server";

// // export const getByIds = query({
// //   args: { ids: v.array(v.id("documents")) },
// //   handler: async (ctx, { ids }) => {
// //     const documents = [];

// //     for (const id of ids) {
// //       const document = await ctx.db.get(id);

// //       if (document) {
// //         documents.push({ id: document._id, name: document.title });
// //       } else {
// //         documents.push({ id, name: "[Removed]" })
// //       }
// //     }

// //     return documents;
// //   },
// // });

// // export const create = mutation({
// //   args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unathorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //     | string
// //     | undefined;

// //     return await ctx.db.insert("documents", {
// //       title: args.title ?? "Untitled coument",
// //       ownerId: user.subject,
// //       organizationId,
// //       initialContent: args.initialContent,
// //     });
// //   },
// // });

// // export const get = query({
// //   args: { paginationOpts: paginationOptsValidator, search: v.optional(v.string()) },
// //   handler: async (ctx, { search, paginationOpts }) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //       | string
// //       | undefined;

// //     // Search within organization
// //     if (search && organizationId) {
// //       return await ctx.db
// //         .query("documents")
// //         .withSearchIndex("search_title", (q) => 
// //           q.search("title", search).eq("organizationId", organizationId)
// //         )
// //         .paginate(paginationOpts)
// //     }

// //     // Personal search
// //     if (search) {
// //       return await ctx.db
// //         .query("documents")
// //         .withSearchIndex("search_title", (q) => 
// //           q.search("title", search).eq("ownerId", user.subject)
// //         )
// //         .paginate(paginationOpts)
// //     }

// //     // All docs inside organization
// //     if (organizationId) {
// //       return await ctx.db
// //         .query("documents")
// //         .withIndex("by_organization_id", (q) => q.eq("organizationId", organizationId))
// //         .order("desc")
// //         .paginate(paginationOpts);
// //     }

// //     // All personal docs
// //     return await ctx.db
// //       .query("documents")
// //       .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
// //       .order("desc")
// //       .paginate(paginationOpts);
// //   },
// // });

// // export const removeById = mutation({
// //   args: { id: v.id("documents") },
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //       | string
// //       | undefined;

// //     const document = await ctx.db.get(args.id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     const isOwner = document.ownerId === user.subject;
// //     const isOrganizationMember = 
// //       !!(document.organizationId && document.organizationId === organizationId);

// //     if (!isOwner && !isOrganizationMember) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     return await ctx.db.delete(args.id);
// //   },
// // });

// // export const updateById = mutation({
// //   args: { id: v.id("documents"), title: v.string() },
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //       | string
// //       | undefined;

// //     const document = await ctx.db.get(args.id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     const isOwner = document.ownerId === user.subject;
// //     const isOrganizationMember = 
// //       !!(document.organizationId && document.organizationId === organizationId);

// //     if (!isOwner && !isOrganizationMember) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     return await ctx.db.patch(args.id, { title: args.title });
// //   },
// // });

// // export const getById = query({
// //   args: { id: v.id("documents") },
// //   handler: async (ctx, { id }) => {
// //     const document = await ctx.db.get(id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     return document;
// //   },
// // });


// // import { ConvexError, v } from "convex/values";
// // import { paginationOptsValidator } from "convex/server";
// // import { mutation, query } from "./_generated/server";

// // // Mutation to create a new document
// // export const create = mutation({
// //   args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //     | string
// //     | undefined;

// //     // Create the document and return its ID
// //     const document = await ctx.db.insert("documents", {
// //       title: args.title ?? "Untitled document",
// //       ownerId: user.subject,
// //       organizationId,
// //       initialContent: args.initialContent,
// //     });

// //     // Save the initial version of the document
// //     await ctx.db.insert("versions", {
// //       documentId: document._id,
// //       content: args.initialContent ?? "",  // Save the initial content as the first version
// //       createdAt: new Date(),
// //       userId: user.subject,
// //     });

// //     return document;
// //   },
// // });

// // // Query to fetch a document by ID
// // export const getById = query({
// //   args: { id: v.id("documents") },
// //   handler: async (ctx, { id }) => {
// //     const document = await ctx.db.get(id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     return document;
// //   },
// // });

// // // Mutation to update a document by ID (creates a new version on update)
// // export const updateById = mutation({
// //   args: { id: v.id("documents"), title: v.string(), content: v.string() }, // Added content to save version
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as string | undefined;
// //     const document = await ctx.db.get(args.id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     const isOwner = document.ownerId === user.subject;
// //     const isOrganizationMember = !!(document.organizationId && document.organizationId === organizationId);

// //     if (!isOwner && !isOrganizationMember) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     // Create a new version before updating the document
// //     await ctx.db.insert("versions", {
// //       documentId: args.id,
// //       content: args.content,   // Save the content as the new version
// //       createdAt: new Date(),
// //       userId: user.subject,    // Store the user who saved the version
// //     });

// //     // Update the document's title and content (for the latest version)
// //     return await ctx.db.patch(args.id, { title: args.title, initialContent: args.content });
// //   },
// // });

// // // Mutation to delete a document by ID
// // export const removeById = mutation({
// //   args: { id: v.id("documents") },
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //       | string
// //       | undefined;

// //     const document = await ctx.db.get(args.id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     const isOwner = document.ownerId === user.subject;
// //     const isOrganizationMember = 
// //       !!(document.organizationId && document.organizationId === organizationId);

// //     if (!isOwner && !isOrganizationMember) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     return await ctx.db.delete(args.id);
// //   },
// // });

// // export const getVersions = query({
// //   args: { documentId: v.id("documents") },
// //   handler: async (ctx, { documentId }) => {
// //     const document = await ctx.db.get(documentId);
// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     const versions = await ctx.db
// //       .query("versions")
// //       .filter((q) => q.eq(q.field("documentId"), documentId))
// //       .order("desc")
// //       .collect();

// //     return versions;
// //   },
// // });


// // import { ConvexError, v } from "convex/values";
// // import { paginationOptsValidator } from "convex/server";
// // import { mutation, query } from "./_generated/server";

// // // Fetch versions for a specific document
// // export const getVersions = query({
// //   args: { id: v.id("documents") },
// //   handler: async (ctx, args) => {
// //     try {
// //       const versions = await ctx.db
// //         .query("document_versions")
// //         .withIndex("by_document_id", (q) => q.eq("documentId", args.id))
// //         .collect();

// //       return versions;
// //     } catch (error) {
// //       console.error("Error fetching document versions:", error);
// //       return [];
// //     }
// //   },
// // });

// // // Create a new document
// // export const create = mutation({
// //   args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
// //   handler: async (ctx, args) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //       | string
// //       | undefined;

// //     return await ctx.db.insert("documents", {
// //       title: args.title ?? "Untitled document",
// //       ownerId: user.subject,
// //       organizationId,
// //       initialContent: args.initialContent,
// //     });
// //   },
// // });

// // // Update a document (and save version)
// // export const updateById = mutation({
// //   args: { id: v.id("documents"), title: v.string(), content: v.optional(v.string()) },
// //   handler: async (ctx, { id, title, content }) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const document = await ctx.db.get(id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     if (document.ownerId !== user.subject) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     // Save a new version of the document before updating
// //     const now = Date.now(); // Get the current timestamp in milliseconds
// //     const version = await ctx.db.insert("document_versions", {
// //       documentId: id,
// //       title: document.title,
// //       content: document.initialContent || "",
// //       createdAt: now, // Store the timestamp as a number
// //     });

// //     // Now update the document's title and content
// //     return await ctx.db.patch(id, {
// //       title,
// //       initialContent: content,
// //     });
// //   },
// // });

// // export const get = query({
// //   args: { paginationOpts: paginationOptsValidator, search: v.optional(v.string()) },
// //   handler: async (ctx, { search, paginationOpts }) => {
// //     const user = await ctx.auth.getUserIdentity();

// //     if (!user) {
// //       throw new ConvexError("Unauthorized");
// //     }

// //     const organizationId = (user.organization_id ?? undefined) as
// //       | string
// //       | undefined;

// //     // Search within organization
// //     if (search && organizationId) {
// //       return await ctx.db
// //         .query("documents")
// //         .withSearchIndex("search_title", (q) => 
// //           q.search("title", search).eq("organizationId", organizationId)
// //         )
// //         .paginate(paginationOpts)
// //     }

// //     // Personal search
// //     if (search) {
// //       return await ctx.db
// //         .query("documents")
// //         .withSearchIndex("search_title", (q) => 
// //           q.search("title", search).eq("ownerId", user.subject)
// //         )
// //         .paginate(paginationOpts)
// //     }

// //     // All docs inside organization
// //     if (organizationId) {
// //       return await ctx.db
// //         .query("documents")
// //         .withIndex("by_organization_id", (q) => q.eq("organizationId", organizationId))
// //         .order("desc")
// //         .paginate(paginationOpts);
// //     }

// //     // All personal docs
// //     return await ctx.db
// //       .query("documents")
// //       .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
// //       .order("desc")
// //       .paginate(paginationOpts);
// //   },
// // });
// // // Restore a document to a specific version
// // export const restoreVersion = mutation({
// //   args: { documentId: v.id("documents"), versionId: v.id("document_versions") },
// //   handler: async (ctx, { documentId, versionId }) => {
// //     const version = await ctx.db.get(versionId);

// //     if (!version) {
// //       throw new ConvexError("Version not found");
// //     }

// //     const document = await ctx.db.get(documentId);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     // Update the document with the content from the version
// //     await ctx.db.patch(documentId, {
// //       title: version.title,
// //       initialContent: version.content,
// //     });

// //     return version; // Return the restored version
// //   },
// // });

// // // Get a document by ID
// // export const getById = query({
// //   args: { id: v.id("documents") },
// //   handler: async (ctx, { id }) => {
// //     const document = await ctx.db.get(id);

// //     if (!document) {
// //       throw new ConvexError("Document not found");
// //     }

// //     return document;
// //   },
// // });


// import { ConvexError, v } from "convex/values";
// import { paginationOptsValidator } from "convex/server";
// import { mutation, query } from "./_generated/server";

// // Fetch versions for a specific document
// export const getVersions = query({
//   args: { id: v.id("documents") },
//   handler: async (ctx, args) => {
//     try {
//       const versions = await ctx.db
//         .query("document_versions")
//         .withIndex("by_document_id", (q) => q.eq("documentId", args.id))
//         .collect();

//       return versions;
//     } catch (error) {
//       console.error("Error fetching document versions:", error);
//       return [];
//     }
//   },
// });

// // Create a new document
// export const create = mutation({
//   args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
//   handler: async (ctx, args) => {
//     const user = await ctx.auth.getUserIdentity();

//     if (!user) {
//       throw new ConvexError("Unauthorized");
//     }

//     const organizationId = (user.organization_id ?? undefined) as
//       | string
//       | undefined;

//     return await ctx.db.insert("documents", {
//       title: args.title ?? "Untitled document",
//       ownerId: user.subject,
//       organizationId,
//       initialContent: args.initialContent,
//     });
//   },
// });

// // Update a document (and save version)
// export const updateById = mutation({
//   args: { id: v.id("documents"), title: v.string(), content: v.optional(v.string()) },
//   handler: async (ctx, { id, title, content }) => {
//     const user = await ctx.auth.getUserIdentity();

//     if (!user) {
//       throw new ConvexError("Unauthorized");
//     }

//     const document = await ctx.db.get(id);

//     if (!document) {
//       throw new ConvexError("Document not found");
//     }

//     if (document.ownerId !== user.subject) {
//       throw new ConvexError("Unauthorized");
//     }

//     // Save a new version of the document before updating
//     const now = Date.now();
//     const version = await ctx.db.insert("document_versions", {
//       documentId: id,
//       title: document.title,
//       content: content || "", // Correct: Using the content argument
//       createdAt: now,
//     });

//     // Now update the document's title and content
//     return await ctx.db.patch(id, {
//       title,
//       initialContent: content,
//     });
//   },
// });

// export const get = query({
//   args: { paginationOpts: paginationOptsValidator, search: v.optional(v.string()) },
//   handler: async (ctx, { search, paginationOpts }) => {
//     const user = await ctx.auth.getUserIdentity();

//     if (!user) {
//       throw new ConvexError("Unauthorized");
//     }

//     const organizationId = (user.organization_id ?? undefined) as
//       | string
//       | undefined;

//     // Search within organization
//     if (search && organizationId) {
//       return await ctx.db
//         .query("documents")
//         .withSearchIndex("search_title", (q) =>
//           q.search("title", search).eq("organizationId", organizationId)
//         )
//         .paginate(paginationOpts);
//     }

//     // Personal search
//     if (search) {
//       return await ctx.db
//         .query("documents")
//         .withSearchIndex("search_title", (q) =>
//           q.search("title", search).eq("ownerId", user.subject)
//         )
//         .paginate(paginationOpts);
//     }

//     // All docs inside organization
//     if (organizationId) {
//       return await ctx.db
//         .query("documents")
//         .withIndex("by_organization_id", (q) => q.eq("organizationId", organizationId))
//         .order("desc")
//         .paginate(paginationOpts);
//     }

//     // All personal docs
//     return await ctx.db
//       .query("documents")
//       .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
//       .order("desc")
//       .paginate(paginationOpts);
//   },
// });

// // Restore a document to a specific version
// export const restoreVersion = mutation({
//   args: { documentId: v.id("documents"), versionId: v.id("document_versions") },
//   handler: async (ctx, { documentId, versionId }) => {
//     const version = await ctx.db.get(versionId);

//     if (!version) {
//       throw new ConvexError("Version not found");
//     }

//     const document = await ctx.db.get(documentId);

//     if (!document) {
//       throw new ConvexError("Document not found");
//     }

//     // Update the document with the content from the version
//     await ctx.db.patch(documentId, {
//       title: version.title,
//       initialContent: version.content,
//     });

//     return version; // Return the restored version
//   },
// });

// // Get a document by ID
// export const getById = query({
//   args: { id: v.id("documents") },
//   handler: async (ctx, { id }) => {
//     const document = await ctx.db.get(id);

//     if (!document) {
//       throw new ConvexError("Document not found");
//     }

//     return document;
//   },
// });




// convex/documents.ts
import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";

// Fetch versions for a specific document
export const getVersions = query({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    try {
      const versions = await ctx.db
        .query("document_versions")
        .withIndex("by_document_id", (q) => q.eq("documentId", args.id))
        .collect();

      return versions;
    } catch (error) {
      console.error("Error fetching document versions:", error);
      return [];
    }
  },
});

// Create a new document
export const create = mutation({
  args: { title: v.optional(v.string()), initialContent: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled document",
      ownerId: user.subject,
      organizationId,
      initialContent: args.initialContent,
    });
  },
});

// Update a document (and save version)
export const updateById = mutation({
  args: { id: v.id("documents"), title: v.string(), content: v.optional(v.string()) },
  handler: async (ctx, { id, title, content }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const document = await ctx.db.get(id);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    if (document.ownerId !== user.subject) {
      throw new ConvexError("Unauthorized");
    }

    console.log("Content received by mutation:", content); //Added log

    // Save a new version of the document before updating
    if (content!=undefined){
      const now = Date.now();
      const version = await ctx.db.insert("document_versions", {
      documentId: id,
      title: title, // Use the updated title
      content: content || "",
      createdAt: now,
    });
    }

    // Now update the document's title and content
    return await ctx.db.patch(id, {
      title,
    });
  },
});

export const get = query({
  args: { paginationOpts: paginationOptsValidator, search: v.optional(v.string()) },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    // Search within organization
    if (search && organizationId) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", organizationId)
        )
        .paginate(paginationOpts);
    }

    // Personal search
    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        )
        .paginate(paginationOpts);
    }

    // All docs inside organization
    if (organizationId) {
      return await ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) => q.eq("organizationId", organizationId))
        .order("desc")
        .paginate(paginationOpts);
    }

    // All personal docs
    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .order("desc")
      .paginate(paginationOpts);
  },
});

// Restore a document to a specific version
export const restoreVersion = mutation({
  args: { documentId: v.id("documents"), versionId: v.id("document_versions") },
  handler: async (ctx, { documentId, versionId }) => {
    const version = await ctx.db.get(versionId);

    if (!version) {
      throw new ConvexError("Version not found");
    }

    const document = await ctx.db.get(documentId);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    // Update the document with the content from the version
    await ctx.db.patch(documentId, {
      title: version.title,
      initialContent: version.content,
    });

    return version; // Return the restored version
  },
});

// Get a document by ID
export const getById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, { id }) => {
    const document = await ctx.db.get(id);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    return document;
  },
});


export const removeById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const organizationId = (user.organization_id ?? undefined) as
      | string
      | undefined;

    const document = await ctx.db.get(args.id);

    if (!document) {
      throw new ConvexError("Document not found");
    }

    const isOwner = document.ownerId === user.subject;
    const isOrganizationMember = 
      !!(document.organizationId && document.organizationId === organizationId);

    if (!isOwner && !isOrganizationMember) {
      throw new ConvexError("Unauthorized");
    }

    return await ctx.db.delete(args.id);
  },
});