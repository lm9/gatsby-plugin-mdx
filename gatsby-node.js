const path = require('path')
exports.modifyWebpackConfig = ({ config, stage }) => {
	const mdFiles = /\.mdx?$/;
	config.loader(`mdx`, {
		test: mdFiles,
		loaders: [
			'babel-loader?' + 'babelrc=false,' + 'presets[]=env,' + 'presets[]=react',
			'mdx-loader',
			path.resolve('markdown-loader.js')
		]
	})
}