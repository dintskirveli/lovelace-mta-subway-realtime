import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'

export default {
  input: ["src/mta-subway-realtime-card.ts"],
  output: {
    dir: "./dist",
    format: "es"
  },
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
    }),
    babel({
      exclude: "node_modules/**"
    }),
    terser(),
    copy({
      targets: [
        { src: 'images/*.svg', dest: 'dist/public' },
      ]
    })
  ]
};
