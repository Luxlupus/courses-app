import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
    },
    settings: {
      react: {
        version: "detect", // Automatically detects the react version
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...react.configs.recommended.rules,
      // Additional custom rules can be added here
    },
  },
];
