const path = require("path");

const combinedEntryFiles = () => {

  // Original entry files loaded
  const mainFiles = {
    cba: "./src/js/_cba.js",
  };

  // combine/flatten into One obj
  const entryFiles = { ...mainFiles }
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
      filename: isProduction ? "[name].min.js" : "[name].js",
      chunkFilename: "[name].js?ver=[chunkhash]",
      publicPath: "/",
      clean: true,
      library: {
        name: ['cba', '[name]'],
        type: 'umd',
      },
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

      ],
    },
  };
};
