/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3001/:path*' // Proxy to Backend
          },
          {
            source: '/public/:path*',
            destination: 'http://localhost:3001/:path*' // Proxy to Backend
          },
          {
            source: '/auth/:path*',
            destination: 'http://localhost:3001/:path*' // Proxy to Backend
          }
        ]
      }
}

module.exports = nextConfig
