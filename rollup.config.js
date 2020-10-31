import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { nodeResolve } from '@rollup/plugin-node-resolve';


// rollup.config.js
const config = {
  input: 'src/index.js',
  external: ['react', "react-dom" ,'prop-types', "react-syntax-highlighter"],
  plugins: [
    babel({
      //presets: ["@babel/preset-react"],
      exclude: "node_modules/**"
    }),
    sourcemaps(),
      nodeResolve(),
    postcss({
      extract: false,
      modules: false,
      use: ['sass'],
    }),
    terser()
  ],
  output: {
    format: 'umd',
    sourcemap: true,
    name: 'index',
    exports: 'named',
    globals: {
      react: "React",
      'react-dom': 'ReactDOM'
    }
  }
}

export default config
