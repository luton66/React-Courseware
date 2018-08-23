module.exports = {
    // Identify the entry file and the optional polyfiller
    entry: ['babel-polyfill', './main.js'],
    // Identify the file that will be created when we 'build'
    // and where to put it...
    output: {
        path: __dirname,
        filename: 'index.js'    // Note: the path and filename are chosen by the devs
    },
    // Make sure that webpack looks for both .js and .jsx files
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Set up the webpack dev server
    devServer: {
        inline: true,           // Auto-refresh on the fly
        port: 8080              // Set the port on localhost to run the app (configurable)
    },
    // Set up debugging support in the browser - using sourcemaps
    devtool: 'source-map',
    // Finally, set up the transpilation of our files
    module: {
        rules: [
            {
                // Find all files that end with .js or .jsx and pass to loader
                test: /\.jsx?$/,
                // But don't look for files inside node_modules
                exclude: /node_modules/,
                // Use the babel loader and set up presets
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    }
}