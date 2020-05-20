import { src, dest } from "gulp";
import webpack from "webpack-stream";
import { reload } from "browser-sync";

import paths from "./paths";

const jsSet = () => {
  return new Promise((resolve) => {
    src(paths.script.index)
      .pipe(
        webpack({
          entry: {
            app: paths.script.index,
          },
          output: {
            filename: "[name].js",
          },
          module: {
            rules: [
              {
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      [
                        "@babel/preset-env",
                        {
                          targets: {
                            browsers: ["> 1%", "last 2 versions", "ie >= 11"],
                          },
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
          devtool: "source-map",
          mode: "production",
        })
      )
      .pipe(dest(paths.script.build))
      .pipe(
        reload({
          stream: true,
        })
      );
    resolve();
  });
};

export default jsSet;
