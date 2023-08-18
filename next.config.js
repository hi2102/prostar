/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	images: {
	// 		allowFutureImage: true,
	// 	},
	// 	serverActions: true,
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.nike.com',
			},
		],
	},
	pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig
