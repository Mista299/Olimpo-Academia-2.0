import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

// Define tus rutas
const routes = [
  '/',
  '/nosotros',
  '/productosServicios',
  '/inscripciones',
  '/donaciones',
];

// Genera el sitemap
const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://olimpoacademia.com' }); // Cambia al dominio real
  const writeStream = createWriteStream(path.resolve('public', 'sitemap.xml'));

  routes.forEach((route) => {
    sitemapStream.write({ url: route, changefreq: 'monthly', priority: 0.8 });
  });

  sitemapStream.end();

  // Convierte a un archivo XML y guárdalo
  const sitemapData = await streamToPromise(sitemapStream).then((data) => data.toString());
  writeStream.write(sitemapData);

  console.log('Sitemap generado en public/sitemap.xml');
};

generateSitemap();
