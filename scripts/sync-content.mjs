// scripts/sync-content.mjs

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script will synchronize content from the specs/ directories
// into the docusaurus/docs/ directory.

async function syncContent() {
  console.log('Starting content synchronization...');

    const specsDir = path.resolve(__dirname, '../specs');

    const docsDir = path.resolve(__dirname, '../docusaurus/docs');

  

    // Clear existing docs directory content

    console.log(`Clearing ${docsDir}...`);

    await fs.rm(docsDir, { recursive: true, force: true });

    await fs.mkdir(docsDir, { recursive: true });

  

    // Find all feature directories (e.g., specs/1-ros2-control-module)

    console.log(`Finding feature directories in ${specsDir}...`);

    const featureDirs = (await fs.readdir(specsDir, { withFileTypes: true }))

      .filter(dirent => dirent.isDirectory() && /^\d+-.+-module$/.test(dirent.name))

      .map(dirent => path.join(specsDir, dirent.name));

  

    console.log('Found feature directories:', featureDirs);
  for (const featureDir of featureDirs) {
    const moduleName = path.basename(featureDir); // e.g., "1-ros2-control-module"
    const targetModuleDir = path.join(docsDir, moduleName);

    console.log(`Processing module: ${moduleName}`);
    await fs.mkdir(targetModuleDir, { recursive: true });

    // Copy relevant markdown files
    const moduleFiles = await fs.readdir(featureDir, { withFileTypes: true });
    for (const file of moduleFiles) {
      if (file.isFile() && (file.name.endsWith('.md') || file.name.endsWith('.mdx'))) {
        const sourcePath = path.join(featureDir, file.name);
        const targetPath = path.join(targetModuleDir, file.name);
        console.log(`Copying ${file.name} to ${targetModuleDir}`);
        await fs.copyFile(sourcePath, targetPath);
      }
    }
    // Create _category_.json for the module to ensure it appears in the sidebar
    const categoryJsonPath = path.join(targetModuleDir, '_category_.json');
    const categoryJsonContent = JSON.stringify({
      label: moduleName.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      position: parseInt(moduleName.split('-')[0]),
      link: {
        type: 'generated-index',
        title: `${moduleName.replace(/^\d+-/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Overview`
      }
    }, null, 2);
    await fs.writeFile(categoryJsonPath, categoryJsonContent);
    console.log(`Created _category_.json for ${moduleName}`);
  }

  // Create a top-level index.md for the docs root
  const rootIndexMdPath = path.join(docsDir, 'index.md');
  const rootIndexMdContent = `---
sidebar_position: 1
---

# Welcome to the AI-Native Robotics Book

This is the main entry point for the book.
Content for each module is automatically synced here.
`;
  await fs.writeFile(rootIndexMdPath, rootIndexMdContent);
  console.log(`Created root index.md at ${rootIndexMdPath}`);

  console.log('Content synchronization complete.');
}

syncContent().catch(console.error);
