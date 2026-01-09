import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  schema: process.env.SCHEMA_PATH || "https://bmwpdsdev.wpenginepowered.com/graphql",
  documents: [
    "src/**/*.{tsx,ts}",
    "node_modules/@faustwp/blocks/dist/mjs/blocks/*.js",
  ],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
