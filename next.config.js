/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Aktifkan static export
  output: 'export',

  // 2. Nonaktifkan optimasi gambar untuk hosting statis
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: 'placehold.co' },
      { hostname: 'learningcenter.mulaindonesia.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'psb.ccit-ftui.com' },
    ],
  },
};

module.exports = nextConfig;