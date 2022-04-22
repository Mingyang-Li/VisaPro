# Getting started with your app

## Available Scripts

In the project directory you can run:

### `yarn start`

Runs the app in the development mode.
By default, it is accessible at http://localhost:3000

### `yarn test`

Launches the test runner.

### `yarn run build`

Builds the app for production to the `dist` folder.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Development

Make sure you have Node.js 14, npm, and Docker installed.

- Install dependencies

```
yarn
```

- Generate Prisma client

```
yarn run prisma:generate
```

- Start database in Docker

```
yarn run docker:db
```

- Initiate the database

```
yarn run db:init
```

- Start the server

```
yarn start
```

## Learn more

You can learn more in the [Amplication documentation](https://docs.amplication.com/guides/getting-started).
