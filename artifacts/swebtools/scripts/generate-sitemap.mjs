import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const siteRoot = 'https://sweb.tools';
const routes = [
  '/',
  '/services',
  '/pricing',
  '/portfolio',
  '/why-sweb',
  '/use-cases',
  '/case-studies',
  '/tools',
  '/blog',
  '/services/ai-automation',
  '/services/ai-chatbots',
  '/services/workflow-automation',
  '/services/business-automation',
  '/services/web-development',
  '/services/saas-development',
  '/ai-automation',
  '/ai-chatbots',
  '/workflow-automation',
  '/business-automation',
  '/web-development',
  '/blog/ai-automation-guide',
  '/blog/chatbots-for-business',
  '/blog/website-vs-saas',
  '/blog/how-ai-saves-business-time',
  '/blog/workflow-automation-explained',
  '/tools/roi-calculator',
  '/tools/seo-title-generator',
  '/tools/meta-description-generator',
  '/tools/ai-prompt-generator',
];
const locales = ['en', 'ar', 'tr', 'ru'];

const urlset = routes
  .map((route) => {
    const url = `${siteRoot}${route}`;
    const lastmod = new Date().toISOString().split('T')[0];
    const alternateLinks = locales
      .map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${siteRoot}/${locale}${route === '/' ? '' : route}"/>`)
      .join('\n');

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
${alternateLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteRoot}${route}"/>
  </url>`;
  })
  .join('\n\n');

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${urlset}

</urlset>
`;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sitemapPath = path.join(scriptDir, '..', 'public', 'sitemap.xml');
await fs.writeFile(sitemapPath, content, 'utf8');
console.log('Generated sitemap.xml at', sitemapPath);
