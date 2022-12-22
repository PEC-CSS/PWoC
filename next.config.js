/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    CLIENT_ID: process.env.CLIENT_ID
  },
  images: {
    domains: ['avatars.githubusercontent.com', 's3-us-west-2.amazonaws.com', 'winterofcode.com']
  }
}

module.exports = nextConfig
