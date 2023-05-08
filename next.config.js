/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Avoiding CORS issues
    // async rewrites() {
    //   return [
    //     {
    //       source: '/api/:slug*',
    //       destination: 'http://localhost:3000/api/:slug*'
    //     }
    //   ]
    // }
}

module.exports = nextConfig
