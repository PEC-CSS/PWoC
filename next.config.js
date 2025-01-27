/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true, // Enabled for better performance
  
	env: {
	  ACCESS_TOKEN: process.env.ACCESS_TOKEN || "",
	  PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID || "",
	  PRIVATE_KEY: process.env.PRIVATE_KEY || "",
	  CLIENT_ID: process.env.CLIENT_ID || "",
	},
  
	images: {
	  domains: [
		"avatars.githubusercontent.com",
		"s3-us-west-2.amazonaws.com",
		"winterofcode.com",
		"res.cloudinary.com",
	  ],
	},
  
	// ✅ Ensures security headers are applied correctly
	async headers() {
	  return [
		{
		  source: "/(.*)",
		  headers: [
			{ key: "X-Content-Type-Options", value: "nosniff" },
			{ key: "X-Frame-Options", value: "SAMEORIGIN" },
			{ key: "X-XSS-Protection", value: "1; mode=block" },
		  ],
		},
	  ];
	},
  
	// ✅ Webpack optimization to fix "too many open files" issue
	webpack: (config) => {
	  config.infrastructureLogging = { level: "error" }; // Reduce log spam
	  config.parallelism = 2; // Limits parallel file processing
	  return config;
	},
  
	// ✅ Experimental optimizations to prevent crashes during builds
	experimental: {
	  workerThreads: false, // Prevents excessive resource usage
	  cpus: 1, // Uses a single CPU to reduce file lock issues
	},
  };
  
  module.exports = nextConfig;  