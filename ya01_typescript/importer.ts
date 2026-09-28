import {hello} from "./exporter.ts" 
//При разных системах сборки и опциях компилятора
// может потребоваться и ./exporter.js, и ./exporter.ts, и ./exporter

console.log("I am importer");
hello();