import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDirectory = path.resolve("public");
const outputDirectory = path.join(publicDirectory, "optimized");
const rasterExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function findRasterImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    if (entry.name === "optimized") continue;

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      images.push(...await findRasterImages(entryPath));
    } else if (rasterExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath);
    }
  }

  return images;
}

const images = await findRasterImages(publicDirectory);
let originalBytes = 0;
let optimizedBytes = 0;

for (const imagePath of images) {
  const relativePath = path.relative(publicDirectory, imagePath);
  const outputPath = path.join(outputDirectory, relativePath.replace(/\.(?:jpe?g|png)$/i, ".webp"));
  await mkdir(path.dirname(outputPath), { recursive: true });

  const sourceStats = await stat(imagePath);
  const result = await sharp(imagePath)
    .rotate()
    .webp({ quality: 84, effort: 5, smartSubsample: true })
    .toFile(outputPath);

  originalBytes += sourceStats.size;
  optimizedBytes += result.size;
}

const savedPercent = originalBytes === 0 ? 0 : Math.round((1 - optimizedBytes / originalBytes) * 100);
console.log(`Optimized ${images.length} images: ${(originalBytes / 1024 / 1024).toFixed(1)} MB -> ${(optimizedBytes / 1024 / 1024).toFixed(1)} MB (${savedPercent}% smaller).`);