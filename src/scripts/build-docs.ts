import { buildDocs as buildBlogDocs } from './blog/docs';
import { buildDocs as buildProjectDocs } from './project/docs';

const buildDocs = async () => {
  await buildBlogDocs();
  console.log('---------------------');
  await buildProjectDocs();
};

buildDocs();
