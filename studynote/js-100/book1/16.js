const  n = prompt('문장을 입력하세요.');

const reverseN = n.split('').reverse().join('');
/*
split() : 문자열을 배열로 만들어 반환함
reverse(): 배열의 순서를 반전
join() : 원소를 모두 붙여 문자열로 반환
*/

console.log(reverseN);