const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const combinedEntryFiles = () => {

  // Original entry files loaded
  const mainFiles = {
    style: "./src/scss/main.scss",
    script: "./src/js/script.js",
  };

  // combine/flatten into One obj
  const entryFiles = { ...mainFiles}
  console.log('Entry Files = ', entryFiles);

  return entryFiles;

};

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: isProduction ? "production" : "development",

    entry: combinedEntryFiles(),

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      chunkFilename: "[name].js?ver=[chunkhash]",
      publicPath: "/",
      clean: true,
    },

    resolve: {
      extensions: [".js"],
    },

    devtool: isProduction ? false : "source-map",

    performance: {
      hints: false,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },

        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: !isProduction,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: !isProduction,
                postcssOptions: {
                  plugins: [
                    autoprefixer(),
                    ...(isProduction ? [cssnano()] : []),
                  ],
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"), // Dart Sass
                sourceMap: !isProduction,
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src/scss')],
                  outputStyle: isProduction ? "compressed" : "expanded",
                },
              },
            },
          ],
        },

        {
          test: /\.(png|jpe?g|gif|webp|svg)$/i,
          type: "asset/resource",
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),

      new BrowserSyncPlugin(
        {
          host: "localhost",
          port: 3000,
          server: { baseDir: ['.'] }, 
          files: [
            "./src/**/*.scss",
            "./src/js/**/*.js",
            "index.html",
          ],
        },
        {
          reload: false,
        }
      ),

    ],
  };
};
