// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
        fix: true,
      }),
    ],
  },
  publicPath: isProduction ? '/memory-game/' : '/',
};
