module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.01, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Roboto`, `Parisienne`],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { name: `images`, path: `${__dirname}/src/images` },
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-anchor-links`,
	],
};
