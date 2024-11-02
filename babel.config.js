// babel.config.js
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            assets: './src/assets',
            components: './src/components',
            screens: './src/screens',
            hooks: './src/hooks',         // Alias for hooks
            services: './src/services',   // Alias for services
            utils: './src/utils',         // Alias for utils
            GlobalStyles: './src/GlobalStyles',
            context: './src/context',     // Added alias for context
            Theme: './src/Theme',
          },
        },
      ],
    ],
  };
};
