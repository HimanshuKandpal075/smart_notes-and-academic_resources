// Usage: npm run check-pdfs
// Opens every URL in featuredPdfs.js and confirms it returns a PDF.
// Run this with internet access BEFORE seeding. Exit code 1 if any link fails.
const FEATURED_PDFS = require('./featuredPdfs');

const check = async (url) => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    // Range request: we only need the first bytes to see the %PDF header
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { Range: 'bytes=0-1023', 'User-Agent': 'Mozilla/5.0 (link-check)' },
    });
    const type = res.headers.get('content-type') || '';
    const head = Buffer.from(await res.arrayBuffer()).subarray(0, 8).toString('latin1');
    if (!res.ok && res.status !== 206) return `HTTP ${res.status}`;
    if (!head.startsWith('%PDF') && !/pdf/i.test(type)) return `not a PDF (${type || 'unknown type'})`;
    return null;
  } catch (err) {
    return err.name === 'AbortError' ? 'timed out' : err.message;
  } finally {
    clearTimeout(timer);
  }
};

(async () => {
  let bad = 0;
  for (const [subject, pdfs] of Object.entries(FEATURED_PDFS)) {
    for (const pdf of pdfs) {
      const problem = await check(pdf.url);
      if (problem) bad += 1;
      console.log(`${problem ? 'FAIL' : ' ok '}  ${subject} / ${pdf.title}${problem ? `  -> ${problem}\n        ${pdf.url}` : ''}`);
    }
  }
  console.log(bad ? `\n${bad} link(s) need fixing in scripts/featuredPdfs.js` : '\nAll links look good.');
  process.exit(bad ? 1 : 0);
})();
