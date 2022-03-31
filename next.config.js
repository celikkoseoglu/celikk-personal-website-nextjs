const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // config for next-optimized-images
        optimizeImagesInDev: false,
        handleImages: ["png", "webp"],
      },
    ],
    // your other plugins here
  ],
  {
    images: {
      disableStaticImages: true,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(xml|pdf|ico|jpg|mp4|svg|txt|webmanifest)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
          },
        },
      });
      return config;
    },
  }
);
