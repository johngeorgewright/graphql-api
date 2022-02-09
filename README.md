# @johngeorgewright/graphql-api

This is a template repository for creating a GraphQL API.

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [GraphQL Codegen](https://www.graphql-code-generator.com/)
- [GraphQL Modules](https://www.graphql-modules.com/)
- [TypeORM](https://typeorm.io/)

## Setting up

1. Change all references of `@johngeorgewright/graphql-api` to your new package name
1. Also search for references to `@johngeorgewright` & `graphql-api` individually
1. Remove the `private` property from `package.json` (if you want to publically publish your module)
1. Search for all references of `secrets.` in the `.github` diectory and make sure you have the appropriate secrets registered in GitHub (Your Repo > Settings > Secrets)
