const n = prompt('수를 입력하세요.').split(' ');

const res = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(res, left);