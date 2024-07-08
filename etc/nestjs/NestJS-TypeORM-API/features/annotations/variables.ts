const apples: number = 5;

let bananas: number = 10;
bananas = 7;

console.log(apples);
console.log(bananas);

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};


// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y": 20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates);

// any를 썼을 때 문제점 : 아래의 코드가 잘못 됐음을 알  수 없다.
// coordinates.daslkfjasldkjf;


// 2) when we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
// let foundWord: boolean; 보다는 아래와 같이 초기화 하는 것이 더 좋다.
let foundWord = false;

for (let i=0; i<words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
