/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // dış kaynaktan gelen resimlerin bilgilerini next'e bildirir
    // bu bilgileri kullanarak resimleri optimize eder
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
