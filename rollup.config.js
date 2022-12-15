import babel from '@rollup/plugin-babel';
// import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import svgr from '@svgr/rollup'
// import url from '@rollup/plugin-url';
// import resolve from '@rollup/plugin-node-resolve'
// import styles from "rollup-plugin-styles";
// import commonjs from '@rollup/plugin-commonjs';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default {
    input: pkg.source,
    
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
    ],
    plugins: [
        svgr(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: [ ['@babel/preset-react', { runtime: "automatic"}]]
        }),
    ],
};
