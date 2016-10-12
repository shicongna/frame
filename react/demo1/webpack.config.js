module.exports = {
	entry:"./index.jsx",
	output:{
		filename:"main.js"
	},
	module:{
		loaders:[
			{
				test:/\.jsx$/,
				loader:"babel",
				query:{
					presets:["es2015","react"]
				}
			}
		]
	}
}