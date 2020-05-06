import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  plugins: [terser()],
  output: [
    {
      name: 'react-timer-hook',
      file: `dist/index.js`,
      format: 'umd',
      exports: 'named',
      globals: {
        "react": "React",
      }
    },
    {
      file: `dist/index.cjs.js`,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: `dist/index.esm.js`,
      format: 'esm',
      exports: 'named',
    },
  ],
  external: ['react'],
}