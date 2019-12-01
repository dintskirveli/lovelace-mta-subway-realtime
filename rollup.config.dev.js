import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy'

export default {
  input: ['src/mta-subway-realtime-card.ts'],
  output: {
    dir: './dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
    }),
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
    copy({
      targets: [
        { src: 'images/*.svg', dest: 'dist/public' },
      ]
    })
  ],
};
