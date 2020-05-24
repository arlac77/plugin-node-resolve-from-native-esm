import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "src/main.mjs",
    output: {
      format: "esm",
      file: 'dist/bundle.mjs',
    },
    plugins: [resolve()]
};
