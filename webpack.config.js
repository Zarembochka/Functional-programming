const path = require("path");
const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = {
    entry: "./src/index.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        assetModuleFilename: "assets/[name][ext]",
    },
    plugins: [
        new htmlWebpackPlugin({ title: "Functional programming" }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === "prod";
    const envConfig = isProductionMode ? require("./webpack.prod.config") : require("./webpack.dev.config");

    return merge(baseConfig, envConfig);
};