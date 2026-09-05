/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  experimental: {
    outputFileTracingIncludes: {
      '/sembol/[slug]': ['./content/symbols/**/*'],
      '/sitemap/[__metadata_id__]': ['./content/symbols/**/*'],
      '/kategoriler/[category]': ['./content/symbols/**/*'],
      '/diyanet-islami-ruya-tabirleri': ['./content/symbols/**/*'],
      '/a-z': ['./content/symbols/**/*'],
      '/': ['./content/symbols/**/*']
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://mc.yandex.ru https://yandex.ru https://an.yandex.ru https://tpc.googlesyndication.com https://www.googletagservices.com https://adservice.google.com https://fundingchoicesmessages.google.com;
              connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://mc.yandex.ru https://yandex.ru https://an.yandex.ru https://tpc.googlesyndication.com https://www.googletagservices.com https://adservice.google.com;
              frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://yandex.ru https://an.yandex.ru;
              img-src 'self' data: https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://mc.yandex.ru https://yandex.ru https://an.yandex.ru;
              style-src 'self' 'unsafe-inline';
              font-src 'self' data:;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            // GEO: AI botlarına açık indeksleme izni
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self), geolocation=(self)'
          }
        ]
      },
      {
        // GEO: llms.txt ve llms-full.txt için özel cache headers
        source: '/llms(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800'
          },
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8'
          }
        ]
      }
    ];
  },
  async rewrites() {
    return [
      {
        // Regex ile slug içindeki tireleri de yakala:
        // /ruyada-yilan-gormek → /sembol/yilan
        // /ruyada-kara-yilan-gormek → /sembol/kara-yilan
        source: '/ruyada-:slug([a-z0-9][a-z0-9-]*[a-z0-9])-gormek',
        destination: '/sembol/:slug',
      },
      {
        // Tek kelimeli slug'lar için (tire içermeyen)
        source: '/ruyada-:slug([a-z0-9]+)-gormek',
        destination: '/sembol/:slug',
      },

    ];
  }
};

export default nextConfig;
