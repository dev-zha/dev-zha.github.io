import fs from 'fs-extra';
import { Project } from '@/types/project';
import { validateProjectFrontmatter } from './validation';
import { getDataToGenerate, writeJsonData } from '../common-docs';
import { JSON_File_DIR, PROJECT_DOCS_DIR } from '../../utils/constants';

const JSON_FILE_NAME = 'projectSchema.generated.json';

export const buildDocs = async () => {
  console.log('📄 Building Project data...');
  const files = fs.readdirSync(PROJECT_DOCS_DIR);

  const data = await getDataToGenerate<Project>(
    files,
    PROJECT_DOCS_DIR,
    validateProjectFrontmatter
  );

  console.log('✍🏼 Writing Project data schemas...');
  await writeJsonData(data, JSON_File_DIR, JSON_FILE_NAME);

  console.log('🎉 Project data generation completed!');
};
