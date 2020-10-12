import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel'

// rollup.config.js
const config = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ],
  output: {
    format: 'umd',
    name: 'faiyt-ui-components',
    globals: {
      react: "React"
    }
  }
}

export default config
