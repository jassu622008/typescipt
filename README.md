# typescipt
npm install -g typescript
Which should give you an output similar to:

added 1 package, and audited 2 packages in 2s
found 0 vulnerabilities
The compiler is installed in the node_modules directory and can be run with: npx tsc.

npx tsc
Which should give you an output similar to:

Version 4.5.5
tsc: The TypeScript Compiler - Version 4.5.5
npx tsc --init
Which should give you an output similar to:

Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig.json
Here is an example of more things you could add to the tsconfig.json file:

{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
To run your TS file use this command 
npx ts-node script.ts

#Advantages of learning typescript
TypeScript supports static typing. This means that static typing allows type accuracy to be checked at build time.
At the time of development, TypeScript identifies the compilation bugs. ...
TypeScript is just JS with some extra functionality, namely ES6 features.
