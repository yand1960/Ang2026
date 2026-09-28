// Eхроrt и import работают одинковао не во всех движках.
// Так, как здесь - только в node. В браузерах - нет.
// См. еще tsconfig.json. Если он есть, можно сокпилировать все файлы командой >tsc
export function hello() {
	console.log("Hello from exporter");
}
