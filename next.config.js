const optimizedImages = require("next-optimized-images");

/* 
 migrating from next-compose-plugins:
 https://github.com/hashicorp/next-mdx-enhanced/issues/18#issuecomment-859167393
 original source: https://dev.to/krzysztofzuraw/migrating-nextjs-plugins-from-next-compose-plugins-2gnl
 */
module.exports = () => {
  const plugins = [optimizedImages /*, other plugins go here after the comma*/];
  return plugins.reduce(
    (acc, next) => {
      if (next.name === "optimizedImages") {
        return next(acc, {
          // config for next-optimized-images
          optimizeImagesInDev: false,
          handleImages: ["png", "webp"],
          removeOriginalExtension: true,
        });
      }

      return next(acc);
    },
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
};
