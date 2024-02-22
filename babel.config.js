import styleXPlugin from '@stylexjs/babel-plugin';

const config = {
  plugins: [
    [
      styleXPlugin,
      {
        dev: true,
        test: false,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: "src",
        },
      },
    ],
  ],
};

export default config;