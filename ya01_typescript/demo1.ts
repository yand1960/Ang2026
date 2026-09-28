// Есть типизация
var a: number = 1;
var b: number = 2;
var c = a + b;

console.log(c);
//c = "qwerty"; // Ошибка комиляции

function plus(x: number, y:number): number {
	return x + y;
}

console.log(plus(3, 4));

// ООП на полную катушку
class Arith {
	// Есть модификаторы доступа
	//private x: number = 0;
	x: number = 0;
	y: number = 0;
	
	// Перегузок нет
	//constructor() {}
	
	constructor(x: number = 0, y:number = 0) {
		this.x = x;
		this.y = y;
	}
	
	plus(x: number, y:number): number {
		return x + y;
	}
	
	minus(): number {
		return this.x - this.y;
	}
}

var a1: Arith = new Arith()
console.log(a1.plus(5, 6))
a1.x = 8;
a1.y = 9;
console.log(a1.minus())

var a2 = new Arith(11, 10);
console.log(a2.minus())
