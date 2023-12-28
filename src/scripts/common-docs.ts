import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

interface FileInfo {
  name: string;
  path: string;
}

export const getAllMarkdownFiles = (
  files: string[],
  folderPath: string
): FileInfo[] => {
  const mdFiles: FileInfo[] = [];

  files.forEach((filename) => {
    const isMd = /^.*\.(md|MD)$/.test(filename);
    const fullPath = path.resolve(folderPath, filename);

    if (isMd) {
      mdFiles.push({
        name: filename,
        path: fullPath,
      });
    }
  });

  return mdFiles;
};

export interface FileWithContentInfo extends FileInfo {
  content: string;
}

export const readFileContent = async (
  file: FileInfo
): Promise<FileWithContentInfo> => {
  const content = await fs.readFile(file.path, 'utf-8');
  return {
    ...file,
    content,
  };
};

export const parseFrontMatter = (
  markdownContent: string
): Record<string, unknown> => {
  const { data } = matter(markdownContent);
  return data;
};

export const getDataToGenerate = async <T>(
  files: string[],
  folderPath: string,
  validateFrontmatter: (data: Record<string, unknown>) => Omit<T, 'id'>
): Promise<T[]> => {
  const fileList = getAllMarkdownFiles(files, folderPath);
  const fileWithContents = await Promise.all(fileList.map(readFileContent));

  const processedDocs: (T | null)[] = fileWithContents.map(
    ({ name, content }) => {
      const unsafeFrontmatter = parseFrontMatter(content);
      try {
        const frontMatter = validateFrontmatter(unsafeFrontmatter);
        const baseID = path.basename(name, path.extname(name));
        console.log(`\x1b[32m✓ Added item :\x1b[0m`, name);

        return {
          id: baseID,
          ...frontMatter,
        } as T;
      } catch (error) {
        console.error(
          `\x1b[31mError validating front matter for file ${name}:\x1b[0m ${
            error instanceof z.ZodError ? error.message : error
          }`
        );

        return null;
      }
    }
  );

  return processedDocs?.filter((doc): doc is T => doc !== null);
};

export const writeJsonData = async <T>(
  data: T[],
  jsonFilePath: string,
  jsonFileName: string
) => {
  try {
    await fs.mkdirs(jsonFilePath);
    fs.writeFileSync(
      path.join(jsonFilePath, jsonFileName),
      JSON.stringify(data, null, 2)
    );
    console.log(
      `📄 JSON data written to \x1b[32m${path.join(
        jsonFilePath,
        jsonFileName
      )}\x1b[0m`
    );
  } catch (err) {
    console.error('\x1b[31mError writing JSON data:\x1b[0m', err);
  }
};
