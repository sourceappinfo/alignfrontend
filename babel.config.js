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
            hooks: './src/hooks', // added hooks alias
            services: './src/services', // added services alias
            utils: './src/utils', // added utils alias
            GlobalStyles: './src/GlobalStyles',
          },
        },
      ],
    ],
  };
};
