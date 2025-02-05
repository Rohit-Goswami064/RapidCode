import js from "@eslint/js";
import next from "@next/eslint-plugin-next";

export default [
  js.configs.recommended, // Standard JavaScript rules
  next.configs.recommended, // Next.js recommended rules
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": next, // Correct way to register Next.js plugin
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "no-unused-vars": "warn",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];
