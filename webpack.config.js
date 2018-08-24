module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["*", ".ts", ".tsx", ".js"]
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
};