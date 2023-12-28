import fs from 'fs-extra';
import { Blog } from '@/types/blog';
import { validateBlogFrontmatter } from './validation';
import { getDataToGenerate, writeJsonData } from '../common-docs';
import { BLOG_DOCS_DIR, JSON_File_DIR } from '../../utils/constants';

const JSON_FILE_NAME = 'blogSchema.generated.json';

export const buildDocs = async () => {
  console.log('📄 Building Blog data...');
  const files = fs.readdirSync(BLOG_DOCS_DIR);

  const data = await getDataToGenerate<Blog>(
    files,
    BLOG_DOCS_DIR,
    validateBlogFrontmatter
  );

  console.log('✍🏼 Writing Blog data schemas...');
  await writeJsonData(data, JSON_File_DIR, JSON_FILE_NAME);

  console.log('🎉 Blog data generation completed!');
};
