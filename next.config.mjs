/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/your-repo-name',  // Replace 'your-repo-name' with your actual GitHub repository name
    assetPrefix: '/your-repo-name/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
