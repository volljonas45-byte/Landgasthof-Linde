import opentype from 'opentype.js';
import { readFileSync } from 'fs';

// The woff2 file for Latin characters (L, i, n, d, e)
const fontPath = '.next/dev/static/media/f48d461c03e0a8ec-s.p.13m1ppbimti50.woff2';

try {
  const buffer = readFileSync(fontPath);
  const font = opentype.parse(buffer.buffer);

  const fontSize = 120;
  const x = 0;
  const y = 100; // baseline

  const path = font.getPath('Linde', x, y, fontSize);
  const svgPath = path.toSVG(2);

  // Get bounding box
  const bb = path.getBoundingBox();
  console.log('BoundingBox:', JSON.stringify(bb));
  console.log('SVG_PATH_START');
  console.log(svgPath);
  console.log('SVG_PATH_END');
} catch (e) {
  console.error('Error:', e.message);
}
