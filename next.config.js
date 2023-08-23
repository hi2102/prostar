/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.nike.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
			},
		],
	},
	pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig
