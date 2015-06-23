sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: 'http://www.pourlesprofs.fr/', lastmod: new Date() },
    { page: '/', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'fr', href: 'http://www.pourlesprofs.fr/fr' },
      { rel: 'alternate', hreflang: 'en', href: 'http://www.pourlesprofs.fr/en' },
      { rel: 'alternate', hreflang: 'fr', href: 'http://www.pourlesprofs.fr/' }
    ]},
    { page: '/fr', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'fr', href: 'http://www.pourlesprofs.fr/' },
      { rel: 'alternate', hreflang: 'en', href: 'http://www.pourlesprofs.fr/en' },
      { rel: 'alternate', hreflang: 'fr', href: 'http://www.pourlesprofs.fr/fr' }
    ]},
    { page: '/en', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'fr', href: 'http://www.pourlesprofs.fr/' },
      { rel: 'alternate', hreflang: 'fr', href: 'http://www.pourlesprofs.fr/fr' },
      { rel: 'alternate', hreflang: 'en', href: 'http://www.pourlesprofs.fr/en' }
    ]}
  ];
});