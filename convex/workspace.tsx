import { v } from "convex/values";
import { query } from "./_generated/server";

export const getWorkspace = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("workspace")
      .filter((q) => q.eq(q.field("_id"), args.id))
      .first();
  },
});