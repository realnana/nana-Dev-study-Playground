// 문제 10번 : 별 찍기

const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++) {
    let star = ''; // 한 줄
    for(let j=1; j<=n-i; j++) {
        star += ' ';    // 공백
    }
    for(let k=1; k<= 2*i; k++) {
        star += '*';
    }
    tree += star + '\n'; 
}
console.log(tree);