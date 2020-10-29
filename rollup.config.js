import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss';


// rollup.config.js
const config = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    postcss({
      extract: false,
      modules: false,
      use: ['sass'],
    }),
    terser()
  ],
  output: {
    format: 'umd',
    name: 'index',
    globals: {
      react: "React"

    }
  }
}

export default config
