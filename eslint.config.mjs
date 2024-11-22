import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  pluginJs.configs.recommended,
  daStyle,
  {
    rules: {
      quotes: 'off',
      indent: 'off',
      'no-trailing-spaces': 'off',
    },
  }
];
