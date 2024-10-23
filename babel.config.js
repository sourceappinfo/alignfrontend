module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],  // react-native-paper in production only
      },
    },
    plugins: [
      'react-native-reanimated/plugin',  // React Native Reanimated plugin

      // Module resolver to handle custom path aliases
      [
        'module-resolver',
        {
          root: ['./src'],               // Root is set to src
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            assets: './src/assets',       // Alias for assets folder
            components: './src/components',  // Alias for components folder
            screens: './src/screens',     // Alias for screens folder
            // utils: './src/utils',         // Removed as it doesn't exist yet
          },
        },
      ],
    ],
  };
};
