// Eхроrt и import работают не во всех движках - только в node. В браузерах - нет.
// См. еще tsconfig.json. Если он есть, можно сокпилировать все файлы командой >tsc
export function hello() {
    console.log("Hello from exporter");
}
