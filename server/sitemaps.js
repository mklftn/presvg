sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: '/', lastmod: new Date() },
    { page: '/', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'fr', href: '/fr' },
      { rel: 'alternate', hreflang: 'en', href: '/en' },
      { rel: 'alternate', hreflang: 'fr', href: '/' }
    ]},
    { page: '/fr', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'fr', href: '/' },
      { rel: 'alternate', hreflang: 'en', href: '/en' },
      { rel: 'alternate', hreflang: 'fr', href: '/fr' }
    ]},
    { page: '/en', xhtmlLinks: [
      { rel: 'alternate', hreflang: 'fr', href: '/' },
      { rel: 'alternate', hreflang: 'fr', href: '/fr' },
      { rel: 'alternate', hreflang: 'en', href: '/en' }
    ]}
  ];
});