import type { APIRoute } from 'astro';
import { site } from '../config/site';

const paths = ['/', '/about', '/packages', '/services', '/products', '/faq', '/contact', '/privacy'];

export const GET: APIRoute = () => {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const urls = paths
		.map((p) => `  <url><loc>${new URL(`${base}${p === "/" ? "/" : p + "/"}`, site.url).href}</loc></url>`)
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
