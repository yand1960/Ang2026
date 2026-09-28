import { hello } from "./exporter.js";
//При запуске в node, обязательно "exporter.js"
//В некоторых других сиcтемах сборки можно без js
console.log("I am importer");
hello();
