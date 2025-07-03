/** @type {import('next').NextConfig} */
const repo = 'hklfsyh.github.io'; 
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;
const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: assetPrefix,

  images: {
    unoptimized: true, 
    dangerouslyAllowSVG: true,
    remotePatterns: [
      // Konfigurasi lama untuk placehold.co (tetap ada jika masih digunakan)
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Menambahkan domain baru untuk logo pendidikan
      {
        protocol: 'https',
        hostname: 'learningcenter.mulaindonesia.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'psb.ccit-ftui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;