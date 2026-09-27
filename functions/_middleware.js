// Cloudflare Pages Function: canonical-domain enforcement.
//
// Redirects every *.pages.dev hostname (production pages.dev URL and branch
// preview subdomains) to the canonical apex domain with a 301, preserving
// the full path and query string:
//
//   https://height-calculator.pages.dev/compare/  ->  301  https://height-calculator.net/compare/
//
// Also consolidates the www subdomain onto the canonical apex host:
//
//   https://www.height-calculator.net/compare/    ->  301  https://height-calculator.net/compare/
//
// NOTE: the www rule only activates if DNS for `www` points at this Pages
// project (CNAME www -> height-calculator.pages.dev). DNS cannot be changed
// from this repository; the CNAME must be added at the DNS provider.
//
// Why a Function and not _redirects: Cloudflare Pages `_redirects` only
// accepts relative paths as the redirect source, so absolute-URL rules like
// "https://height-calculator.pages.dev/* -> ..." are silently ignored.
// A Pages Function inspects the Host header directly and genuinely emits
// a 301.
//
// Safety: this ONLY fires for hostnames ending in ".pages.dev" or exactly
// "www.height-calculator.net". Requests already on height-calculator.net
// pass straight through to `context.next()`, so a redirect loop is
// impossible (apex -> www is never emitted).
//
// The `x-robots-tag: noindex, nofollow` headers for pages.dev in
// public/_headers remain in place as a safety net.

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname.endsWith('.pages.dev') || url.hostname === 'www.height-calculator.net') {
    url.protocol = 'https:';
    url.hostname = 'height-calculator.net';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
