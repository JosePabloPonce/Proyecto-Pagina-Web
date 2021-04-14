
module.exports = {
 mode: 'development',
   module: {
	  rules: [
	  {
		  test: /\.(jsx?)$/,
		  use: ['babel-loader', 'eslint-loader'],
		},
		  {
		   test: /\.(png|jpe?g|gif)$/i,
		   use: 'file-loader?name=[name].[ext]&outputPath=imagenes/'   
        ,
      },


	  ]
  },
  resolve:{
	  extensions: ['*', '.js', '.jsx'],
	  },

 devServer:{
 contentBase: './dist'
 }
}
