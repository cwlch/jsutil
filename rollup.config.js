import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';
import pkg from './package.json';


export default [
  // UMD for browser-friendly build
  {
    input: 'src/index.ts',
    output: {
      name: 'jsutil',
			file: pkg.browser,
			format: 'umd'
    },
    plugins: [resolve(),commonjs(),typescript()]
  },
  // CommonJS for Node and ES module for bundlers build
  {
    input: 'src/index.ts',
    external: ['ms'],
    plugins: [resolve(),commonjs(),typescript(),babel()],
    output: [
      {  file: pkg.main, format: 'cjs' },
      {  file: pkg.module, format: 'es' }
    ]
  }
]