import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      del({ targets: ['dist/*'] }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];