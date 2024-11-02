module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['react', 'react-native'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    'react-native/react-native': true,
    'es6': true,
    'node': true,
    'browser': true,  // This will handle localStorage
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Turn off or reduce severity of common issues
    'react/prop-types': 'off', // Since you're getting many prop-types warnings
    'react-native/no-color-literals': 'off', // For color literals
    'react-native/no-raw-text': 'off', // For text outside Text components
    'react-native/no-inline-styles': 'warn',
    'react-native/sort-styles': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    
    // Keep these strict
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-uses-vars': 'error',
    
    // Style rules
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
  },
};