// 1. Boolean
let isTrue: boolean = false;

// 2. Number
let decimal: number = 3;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 3. String
let color: string = "blue";
color = 'red';

let fullName: string = `Nana Happy`;
let age: number = 25;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age+1} years old next month.`;

let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
"I'll be " + (age+1) + " years old next month.";

// 4. Array
let list: number[] = [1,2,3];
// 제네릭 배열 타입
let list2: Array<number> = [1,2,3];

// 5. Tuple : 요소의 타입과 개수가 고정된 배열, 타입이 달라도 됨
// 튜플 타입으로 선언
let x: [string, number];
// 초기화: 타입 선언과 순서 맞춰야함
x = ["hello", 10];

console.log(x[0].substring(1));

// 정해진 인덱스 외에 다른 인덱스에 있는 요소에 접근하면 오류 발생 및 실패

// 6. Enum: JS의 표준 자료형 집합과 사용 시 도움이 되는 데이터 형, 값의 집합에 이름 붙여주기 됨