/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://mc.yandex.ru https://yandex.ru https://an.yandex.ru https://tpc.googlesyndication.com https://www.googletagservices.com https://adservice.google.com;
              connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://mc.yandex.ru https://yandex.ru https://an.yandex.ru https://tpc.googlesyndication.com https://www.googletagservices.com https://adservice.google.com;
              frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://yandex.ru https://an.yandex.ru;
              img-src 'self' data: https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://mc.yandex.ru https://yandex.ru https://an.yandex.ru;
              style-src 'self' 'unsafe-inline';
              font-src 'self' data:;
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/ruyada-:slug-gormek',
        destination: '/sembol/:slug',
      },
    ];
  }
};

export default nextConfig;
