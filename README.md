# Club API

## Getting Started

To get started, you will need to have Node 18 and NPM installed. Once you have those installed, you can clone the
repository and install the dependencies with:

```bash
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the application on port 3000. You can then access the application at http://localhost:3000.

## Running the Tests

To run the tests, use the following command:

```bash
npm runt test
```

Also, we have a validation script that will check the code for any errors or warnings. To run the validation script,
use the following command:

```bash
npm run validate
```

## Generating the Prisma Client

We use Prisma to generate the database client. To generate the client, use the following command:

```bash
prisma generate
```

## Troubleshooting

If you are having trouble getting the application to run, please check the following:

* Make sure you have Node 18 and NPM installed.
* Make sure you have installed all of the dependencies.
* Make sure you are running the application in development mode.
* Check the logs for any errors.
