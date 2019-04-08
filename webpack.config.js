module.exports = {
    entry: "./use-jquery.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader'
            }
        ]
    }
};