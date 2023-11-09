const path=require('path')
const nodeExternals=require('webpack-node-externals')

module.exports={
    target:'node',
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        libraryTarget:'umd'
    },
    externals:[nodeExternals],
    mode:'development',
    module:{
        rules:[
            {
                test:/.js$/,
                use:'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

}
console.log('webpack')
