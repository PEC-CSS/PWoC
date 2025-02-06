/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
});

const headers = async () => {
	return [
		{
			source: '/(.*)',
			headers: [
				{
					key: 'X-Content-Type-Options',
					value: 'nosniff',
				},
				{
					key: 'X-Frame-Options',
					value: 'SAMEORIGIN',
				},
				{
					key: 'X-XSS-Protection',
					value: '1; mode=block',
				},
			],
		},
	];
};

const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	env: {
		ACCESS_TOKEN: process.env.ACCESS_TOKEN,
		PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID,
		PRIVATE_KEY: process.env.PRIVATE_KEY,
		CLIENT_ID: process.env.CLIENT_ID,
	},
	images: {
		domains: [
			'avatars.githubusercontent.com',
			's3-us-west-2.amazonaws.com',
			'winterofcode.com',
			'res.cloudinary.com',
			'hebbkx1anhila5yf.public.blob.vercel-storage.com'
		],
	},
	headers,
};

module.exports = withPWA(nextConfig);
