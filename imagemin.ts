import fs from 'fs/promises';
import { glob } from 'glob';
import path from 'path';
import sharp from 'sharp';

const deleteIfExists = async (filePath: string): Promise<void> => {
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.error(`Error deleting file: ${filePath}`, error);
    }
  }
};

const optimizeImage = async (
  inputPath: string,
  outputPath: string,
): Promise<void> => {
  const extension = path.extname(inputPath).toLowerCase();
  let image = sharp(inputPath);

  switch (extension) {
    case '.jpg':
    case '.jpeg':
      image = image.jpeg({ quality: 80 });
      break;
    case '.png':
      image = image.png({ quality: 80, compressionLevel: 8 });
      break;
    case '.gif':
      image = image.gif({ effort: 2 });
      break;
    case '.svg':
      break;
    default:
      console.warn(`Unsupported file type: ${inputPath}`);

      return;
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await deleteIfExists(outputPath);
  await image.toFile(outputPath);
};

const optimizeImages = async (
  inputDir: string,
  outputDir: string,
): Promise<void> => {
  try {
    const files: string[] = glob.sync(inputDir);

    await Promise.all(
      files.map(async (file: string) => {
        const outputPath = path.join(outputDir, path.relative('public', file));
        await optimizeImage(file, outputPath);
      }),
    );
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
};

const main = async () => {
  const inputDir = 'public/images/**/*.{jpg,png,gif,svg}';
  const outputDir = 'out/';

  try {
    await optimizeImages(inputDir, outputDir);
  } catch (error) {
    console.error('Error in main execution:', error);
  }
};

main();
