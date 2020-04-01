module.exports = {
	siteMetadata: {
		title: 'Gatsby Bootcamp!',
		author: 'Kelso Brooks'
	},
	plugins: [
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-transformer-remark'
	]
};
