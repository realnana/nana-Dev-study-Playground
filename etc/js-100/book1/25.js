function circle(n) {
    const res = n * n * 3.14;

    return res;
}

const r = prompt('원의 반지름을 입력하세요.');

console.log(circle(r));