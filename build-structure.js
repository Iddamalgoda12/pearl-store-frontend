import fs from 'fs';
import path from 'path';

const basePath = 'src';

const directories = [
  'assets',
  'components/ui',
  'components/common',
  'components/forms',
  'features/auth',
  'features/dashboard',
  'features/trading',
  'features/wallet',
  'layouts',
  'router',
  'stores',
  'composables',
  'services',
  'types',
  'utils',
  'constants',
  'styles',
  'views'
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(basePath, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`→ Exists: ${dir}`);
  }
});

console.log('\n✓ Project structure built successfully!');
