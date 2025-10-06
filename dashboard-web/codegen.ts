// @ts-nocheck
import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
const env_path = `.env`;
dotenv.config({
  path: env_path,
});
const schema_path = process.env.NEXT_PUBLIC_GQL_API_URL;

console.debug("Codegen Loaded ", env_path, schema_path);

if (!schema_path) {
  console.error("Could not load GraphQL API");
}

// @ts-ignore
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${schema_path}`]: {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: "./lib/graphql/**/*.graphql",
  generates: {
    "./generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        preResolveTypes: true,
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsTypes: true,
        constEnums: true,
        reactApolloVersion: 3,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
