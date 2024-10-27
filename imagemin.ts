import fs from 'fs/promises';
import imagemin from 'imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';

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

const optimizeImages = async (
  inputDir: string,
  outputDir: string,
): Promise<void> => {
  try {
    const files = await imagemin([inputDir], {
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({
          quality: [0.65, 0.8],
        }) as any,
        imageminGifsicle(),
        imageminSvgo(),
      ],
    });

    await Promise.all(
      files.map(async (file) => {
        const outputPath = path.join(
          outputDir,
          path.relative('public', file.sourcePath),
        );
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await deleteIfExists(outputPath);
        await fs.writeFile(outputPath, file.data);
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
