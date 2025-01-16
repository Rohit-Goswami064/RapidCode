import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});



// Use FlatConfig array for configuration
export default [
  {
    overrides: [
      {
        files: ['*.js'],
        rules: {
          'next/core-web-vitals': 'warn', // or any other configuration
          'eslint:recommended': 'error', // or any other configuration

        },
      },
    ],
  },
];



