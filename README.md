Installation:

First of all, install the lattest version of node.

Then, Typescript and TSlint:

```
    npm install -D typescript@3.3.3
    npm install -D tslint@5.12.1

```

Now, install express and the types for express

```
    npm install -S express
    npm install -D @types/express
```

Then we have to create the configuration file for Typescript, the tsconfig.json in the root of the project (Check the one in my root)

After that, we need to generate the TSLINT config file, tslint.json via:

```
./node_modules/.bin/tslint --init
```

And enable the console logs adding '"no-console": false' to te rules key.

To finish, we should add to our package.json the run script to compile Typescript code and serve it in the dist folder, adding the latter line in the   "scripts" property of our package.json

```
"start": "tsc && node dist/app.js",
```

And change main property to:

```
  "main": "dist/app.js",
```

Now we can create our src/app.ts file and launch the server.
