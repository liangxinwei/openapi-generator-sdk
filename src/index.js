const path = require('path');
const { readFileSync } = require('fs');
const CodeGen = require('swagger-js-codegen').CodeGen;

const templateFolder = path.resolve(__dirname, './templates');
const out = process.argv[3];
const docFile = path.resolve(process.cwd(), process.argv[2]);

const readTemplate = (template) => {
  const templatePath = path.resolve(templateFolder, template);
  return readFileSync(templatePath, { encoding: 'utf-8' });
};

(function main() {
  const docString = readFileSync(docFile, { encoding: 'utf-8' });
  console.log(docString);
  // var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Test', swagger: docString });
  // console.log(nodejsSourceCode);
  // var angularjsSourceCode = CodeGen.getAngularCode({ className: 'Test', swagger: docString });
  // var reactjsSourceCode = CodeGen.getReactCode({ className: 'Test', swagger: docString });
  // var tsSourceCode = CodeGen.getTypescriptCode({ className: 'Test', swagger: docString, imports: ['../../typings/tsd.d.ts'] });
  // console.log(angularjsSourceCode);
  // console.log(reactjsSourceCode);
  // console.log(tsSourceCode);
})();
