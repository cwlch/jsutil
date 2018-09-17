import webpack from 'webpack';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import Clean from 'clean-webpack-plugin';
import PackageConfig from './package_config';
// import 'babel-polyfill'
import path from 'path';
import fs from 'fs';

// import urlConfig from './config.json';

const basePath = path.resolve(__dirname, 'src');
const outPath = path.join(__dirname, 'dist');


//根据配置文件生成index打包引用文件
const  index= () => {
    let importStr = '',
        exportStr = '';
    for(let item of PackageConfig.modules){
        importStr += `
        import ${item} from './modules/${item}.js';
        `;
        exportStr += `${item},`;
    }

    return `
    ${importStr}
    export {${exportStr}}
    `;
};

fs.writeFileSync(`${basePath}/js/Utils.js`, index());


// defaults 要可修改配置参数
let defaults = {
    devServer: {
        contentBase: outPath,
        clientLogLevel: 'none'
    },
    entry: {
        // common: ['scss/reset.scss', 'util'],
        Utils: 'js/Utils.js'
    },
    resolve: {
        modules: [basePath, 'node_modules'],
        // alias: {
        //     util: `${basePath}/js/common/util.js`
        // }
    },
    ProvidePlugin: new webpack.ProvidePlugin({
        // util: 'util'
    }),
    HtmlPlugin: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的html存放路径，相对于path
            cache: false,
            template: 'index.html', // html模板路径
            inject: 'head', // js插入的位置，true/'head'/'body'/false
            // hash: true, //为静态资源生成hash值
            chunks: ['runtime', 'utils'] // 需要引入的chunk，不配置就会引入所有页面的资源
        })
    ]
};

let config = {
        mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
        context: basePath,
        target: 'web',
        // cache: true,
        entry: defaults.entry,
        output: {
            path: outPath, // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
			// publicPath: '', // 模板、样式、脚本、图片等资源对应的server上的路径
			library: 'Utils',
			libraryTarget: 'umd',
            filename: 'js/[name].js', // 每个页面对应的主js的生成配置
            chunkFilename: 'js/[name].js',
            sourceMapFilename: 'js/[name].map'
        },
        watch: process.env.NODE_ENV === 'dev' ? true : false,
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000,
            ignored: /node_modules/
        },
        optimization: {
            // runtimeChunk: {
            //     name: 'runtime'
            // },
            splitChunks: {
                name: 'common',
                minChunks: Infinity,
                // minSize: 1,
                filename: 'js/[name].js'
            }
        },
        devServer: process.env.NODE_ENV === 'dev' ? defaults.devServer : {},
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            // ExtractSCSS, // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
            new Clean('dist', {
                verbose: true
            })
        ],
        resolve: defaults.resolve,
        module: {
            rules: [{
                test: /\.(png|jpg|gif|svg|webp|ttc|ttf|eot|woff)$/,
                include: basePath,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 1000,
                        // useRelativePath: true,
                        // outputPath: 'css/img',
                        name: 'css/img/[name].[hash:20].[ext]'
                    }
                }]
            }, {
                test: /\.html$/,
                include: basePath,
                use: ['html-loader']
            }, {
                test: /\.js?$/,
                include: basePath,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // options: {
                    // 	cacheDirectory: true,
                    // 	presets: ['env']
                    // }
                }
            }]
        }
    };

// config.plugins.push(...defaults.HtmlPlugin, defaults.ProvidePlugin);

let loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
        context: __dirname
    }
});

if (process.env.NODE_ENV !== 'dev') {
    // config.plugins.push(loaderOptionsPlugin, new UglifyJsPlugin({
    //     test: /\.js($|\?)/i,
    //     exclude: /node_modules/
    // }));
}

export default config;
