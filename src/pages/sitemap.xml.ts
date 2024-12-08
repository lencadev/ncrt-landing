import { type APIRoute } from 'astro';
const pages = [
  // English pages
  { url: '/en', priority: '1.0', changefreq: 'weekly' },
  { url: '/en/who-we-are', priority: '0.8', changefreq: 'monthly' },
  { url: '/en/what-we-do', priority: '0.8', changefreq: 'monthly' },
  { url: '/en/territory', priority: '0.8', changefreq: 'monthly' },
  { url: '/en/contact', priority: '0.8', changefreq: 'monthly' },
  // Spanish pages
  { url: '/es', priority: '1.0', changefreq: 'weekly' },
  { url: '/es/who-we-are', priority: '0.8', changefreq: 'monthly' },
  { url: '/es/what-we-do', priority: '0.8', changefreq: 'monthly' },
  { url: '/es/territory', priority: '0.8', changefreq: 'monthly' },
  { url: '/es/contact', priority: '0.8', changefreq: 'monthly' }
];
export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('site is undefined');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages.map(({ url, priority, changefreq }) => `
        <url>
          <loc>${new URL(url, site)}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    },
  });
};