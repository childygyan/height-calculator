// Merges _staging/<article>.<locale>.ts translations into scheduled/<article>.ts
// Usage: node scripts/merge-scheduled-translations.mjs
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { register } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const scheduledDir = join(__dirname, '../src/data/articles/scheduled');
const stagingDir = join(scheduledDir, '_staging');

const LOCALES = ['pt', 'es', 'fr', 'de', 'hi', 'ja', 'ko', 'ar', 'ru'];

// Serialize a plain JS value as TypeScript object literal (single quotes, trailing commas)
function serialize(value, indent = 0) {
  const pad = '  '.repeat(indent);
  const padIn = '  '.repeat(indent + 1);
  if (value === null || value === undefined) return 'undefined';
  if (typeof value === 'string') {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
  }
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const items = value.map((v) => `${padIn}${serialize(v, indent + 1)}`);
    return `[\n${items.join(',\n')},\n${pad}]`;
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return '{}';
    const items = keys.map((k) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
      return `${padIn}${key}: ${serialize(value[k], indent + 1)}`;
    });
    return `{\n${items.join(',\n')},\n${pad}}`;
  }
  throw new Error(`Cannot serialize ${typeof value}`);
}

async function main() {
  // Use tsx to import TS files
  const { pathToFileURL } = await import('url');

  const files = readdirSync(scheduledDir).filter((f) => f.endsWith('.ts') && f !== '_staging');
  let merged = 0;

  for (const file of files.sort()) {
    const base = file.replace('.ts', '');
    const mainUrl = pathToFileURL(join(scheduledDir, file)).href;
    const { scheduled } = await import(mainUrl);

    let added = 0;
    for (const locale of LOCALES) {
      if (scheduled.articles[locale]) continue; // already merged
      const stagingFile = join(stagingDir, `${base}.${locale}.ts`);
      try {
        readFileSync(stagingFile); // check exists
      } catch {
        console.log(`  SKIP ${base}.${locale} — staging file missing`);
        continue;
      }
      const { translation } = await import(pathToFileURL(stagingFile).href);
      scheduled.articles[locale] = translation;
      added++;
    }

    if (added > 0) {
      const out = `import type { ScheduledArticle } from '../types';

export const scheduled: ScheduledArticle = ${serialize(scheduled, 0)};
`;
      writeFileSync(join(scheduledDir, file), out);
      console.log(`MERGED ${file}: +${added} locales`);
      merged++;
    } else {
      console.log(`OK ${file}: all locales present`);
    }
  }
  console.log(`\nDone. ${merged} files updated.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
