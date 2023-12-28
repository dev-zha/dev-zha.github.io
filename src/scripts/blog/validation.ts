import { z } from 'zod';

const BlogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
});

export type TBlogFrontmatterSchema = z.infer<typeof BlogFrontmatterSchema>;

export const validateBlogFrontmatter = (
  frontmatter: Record<string, unknown>
): TBlogFrontmatterSchema => BlogFrontmatterSchema.parse(frontmatter);
