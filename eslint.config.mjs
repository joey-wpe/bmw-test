import eslintConfigPrettier from "eslint-config-prettier/flat";
import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "./*.js",
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  eslintConfigPrettier,
];
