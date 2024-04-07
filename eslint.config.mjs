import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // See https://typescript-eslint.io/users/configs#recommended-configurations
  eslint.configs.recommended,
  //...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.@(cjs|mjs|js)"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.test.ts"],
    rules: {
      // rules to disable for tests
    },
  },
  {
    ignores: ["dist"],
  },
);
