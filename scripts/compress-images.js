#!/usr/bin/env node

/**
 * Image Compression Script for Jackson Portfolio
 *
 * This script compresses images while maintaining HIGH visual quality
 * Uses sharp library for best-in-class compression
 *
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/compress-images.js
 *
 * Or for a specific folder:
 *   node scripts/compress-images.js public/images/home
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration
const CONFIG = {
  quality: 82, // High quality for photography, smaller files
  maxWidth: 1920, // Enough for full-bleed retina displays
  progressive: true, // Progressive JPEG loading
  optimizeScans: true,
  chromaSubsampling: "4:4:4", // Best color quality
  trellisQuantisation: true,
  overshootDeringing: true,
};

// Directories to process (or pass as command line argument)
const targetDir = process.argv[2] || "public/images";

// Track statistics
let stats = {
  processed: 0,
  originalSize: 0,
  compressedSize: 0,
  errors: 0,
};

/**
 * Get all image files in a directory recursively
 */
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Compress a single image
 */
async function compressImage(filePath) {
  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Skip if already small
    if (originalSize < 100 * 1024) {
      console.log(`⏭️  Skipping ${filePath} (already < 100KB)`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + ".tmp";

    // Read image metadata
    const metadata = await sharp(filePath).metadata();

    let sharpInstance = sharp(filePath);

    // Process based on file type
    if (ext === ".png") {
      sharpInstance = sharpInstance.png({
        quality: CONFIG.quality,
        compressionLevel: 9,
        adaptiveFiltering: true,
      });
    } else {
      // JPEG
      sharpInstance = sharpInstance.jpeg({
        quality: CONFIG.quality,
        progressive: CONFIG.progressive,
        chromaSubsampling: CONFIG.chromaSubsampling,
        trellisQuantisation: CONFIG.trellisQuantisation,
        overshootDeringing: CONFIG.overshootDeringing,
        optimizeScans: CONFIG.optimizeScans,
      });
    }

    // Resize if too large (keep aspect ratio)
    if (metadata.width && metadata.width > CONFIG.maxWidth) {
      sharpInstance = sharpInstance.resize(CONFIG.maxWidth, null, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Write to temp file
    await sharpInstance.toFile(tempPath);

    // Check new size
    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize) * 100;

    // Only replace if significantly smaller (> 5% savings)
    if (newSize < originalSize * 0.95) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);

      stats.originalSize += originalSize;
      stats.compressedSize += newSize;
      stats.processed++;

      console.log(
        `✅ ${filePath}\n` +
          `   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB ` +
          `(${savings.toFixed(1)}% savings)`
      );
    } else {
      fs.unlinkSync(tempPath);
      console.log(`⏭️  ${filePath} (no significant savings)`);
    }
  } catch (error) {
    stats.errors++;
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log("🖼️  Image Compression Script\n");
  console.log(`📁 Target directory: ${targetDir}`);
  console.log(
    `⚙️  Quality: ${CONFIG.quality} (High - maintains visual quality)\n`
  );

  if (!fs.existsSync(targetDir)) {
    console.error(`❌ Directory not found: ${targetDir}`);
    process.exit(1);
  }

  // Check if sharp is installed
  try {
    require.resolve("sharp");
  } catch (e) {
    console.error(
      "❌ Sharp is not installed. Run: npm install sharp --save-dev"
    );
    process.exit(1);
  }

  const imageFiles = getAllImageFiles(targetDir);
  console.log(`Found ${imageFiles.length} images to process\n`);

  // Process images
  for (const file of imageFiles) {
    await compressImage(file);
  }

  // Print summary
  console.log("\n" + "=".repeat(50));
  console.log("📊 Compression Summary\n");
  console.log(`✅ Processed: ${stats.processed} images`);
  console.log(`❌ Errors: ${stats.errors}`);
  console.log(
    `📦 Original size: ${(stats.originalSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `📦 Compressed size: ${(stats.compressedSize / 1024 / 1024).toFixed(2)} MB`
  );

  if (stats.originalSize > 0) {
    const totalSavings =
      ((stats.originalSize - stats.compressedSize) / stats.originalSize) * 100;
    const mbSaved = (stats.originalSize - stats.compressedSize) / 1024 / 1024;
    console.log(
      `💾 Total savings: ${mbSaved.toFixed(2)} MB (${totalSavings.toFixed(1)}%)`
    );
  }
  console.log("=".repeat(50));
}

main().catch(console.error);
