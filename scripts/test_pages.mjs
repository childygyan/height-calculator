import fs from 'fs';

function testPage(filePath, expectedStrings) {
  if (!fs.existsSync(filePath)) {
    console.error('❌ File does not exist:', filePath);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  for (const str of expectedStrings) {
    if (!content.includes(str)) {
      console.error('❌ Missing string in ' + filePath + ':', str);
      process.exit(1);
    }
  }
  console.log('✓ Verified ' + filePath + ' (' + content.length + ' bytes)');
}

// 1. English Home (Canonical)
testPage('dist/index.html', [
  'lang="en"',
  'dir="ltr"',
  '<title>Height Comparison Tool – Compare Anything by Height | Comparação de Altura</title>',
  'hreflang="en" href="https://comparacaodealtura.com/"',
  'hreflang="hi" href="https://comparacaodealtura.com/hi/"',
  'hreflang="x-default" href="https://comparacaodealtura.com/"',
  'rel="canonical" href="https://comparacaodealtura.com/"',
]);

// 2. Hindi Home
testPage('dist/hi/index.html', [
  'lang="hi"',
  'dir="ltr"',
  '<title>ऊंचाई तुलना टूल – लोगों, जानवरों और वस्तुओं की ऊंचाई की तुलना करें | Comparação de Altura</title>',
  'hreflang="en" href="https://comparacaodealtura.com/"',
  'hreflang="hi" href="https://comparacaodealtura.com/hi/"',
  'rel="canonical" href="https://comparacaodealtura.com/hi/"',
]);

// 3. Spanish Home
testPage('dist/es/index.html', [
  'lang="es"',
  'dir="ltr"',
  'Compara cualquier cosa por altura',
  'rel="canonical" href="https://comparacaodealtura.com/es/"',
]);

// 4. French Home
testPage('dist/fr/index.html', [
  'lang="fr"',
  'dir="ltr"',
  "Comparez n'importe quoi par la taille",
  'rel="canonical" href="https://comparacaodealtura.com/fr/"',
]);

// 5. German Home
testPage('dist/de/index.html', [
  'lang="de"',
  'dir="ltr"',
  'Vergleiche alles nach Größe',
  'rel="canonical" href="https://comparacaodealtura.com/de/"',
]);

// 6. Portuguese Home
testPage('dist/pt/index.html', [
  'lang="pt"',
  'dir="ltr"',
  'Compare qualquer coisa por altura',
  'rel="canonical" href="https://comparacaodealtura.com/pt/"',
]);

// 7. Japanese Home
testPage('dist/ja/index.html', [
  'lang="ja"',
  'dir="ltr"',
  '高さであらゆるものを比較',
  'rel="canonical" href="https://comparacaodealtura.com/ja/"',
]);

// 8. Korean Home
testPage('dist/ko/index.html', [
  'lang="ko"',
  'dir="ltr"',
  '키와 높이로 모든 것을 비교하세요',
  'rel="canonical" href="https://comparacaodealtura.com/ko/"',
]);

// 9. Arabic Home (RTL)
testPage('dist/ar/index.html', [
  'lang="ar"',
  'dir="rtl"',
  'قارن أي شيء من حيث الطول والارتفاع',
  'rel="canonical" href="https://comparacaodealtura.com/ar/"',
]);

// 10. Hindi Category Hub
testPage('dist/hi/celebrity-height-comparison/index.html', [
  'lang="hi"',
  'सेलिब्रिटी',
  'rel="canonical" href="https://comparacaodealtura.com/hi/celebrity-height-comparison/"',
]);

// 11. Hindi Comparison Matchup
testPage('dist/hi/compare/tom-cruise-vs-dwayne-johnson/index.html', [
  'lang="hi"',
  'rel="canonical" href="https://comparacaodealtura.com/hi/compare/tom-cruise-vs-dwayne-johnson/"',
]);

// 12. Sitemap XML
testPage('dist/sitemap.xml', [
  '<urlset',
  'https://comparacaodealtura.com/',
  'https://comparacaodealtura.com/hi/',
  'hreflang="en"',
  'hreflang="hi"',
  'hreflang="x-default"',
]);

console.log('\n🎉 ALL 9 LOCALES & SITEMAP VERIFICATION CHECKS PASSED WITH 100% SUCCESS!');
