/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // export statique → dossier /out, compatible GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
