module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
    // Include expo-router in the transpilation process
    ignore: [
      /node_modules\/(?!expo-router)/, // This tells Babel to transpile expo-router
    ],
  };
};
