import { z } from 'zod';

const ProjectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  order: z.number(),
  tags: z.array(z.string()),
  sourceCode: z.string().optional(),
  liveUrl: z.string().optional(),
});

export type TProjectFrontmatterSchema = z.infer<
  typeof ProjectFrontmatterSchema
>;

export const validateProjectFrontmatter = (
  frontmatter: Record<string, unknown>
): TProjectFrontmatterSchema => ProjectFrontmatterSchema.parse(frontmatter);
