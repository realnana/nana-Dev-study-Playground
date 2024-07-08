// 문제 8번 : 객체의 키 이름 중복

/*
자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )


var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

*/

/*
정답 : 84
풀이: 각 키는 유일해야 하기 때문에, 자바스크립트에서 객체의 키가 중복될 때 나중에 지정된 값이 이전의 값을 덮어쓰게 된다.
자바스크립트의 객체는 단순히 키-값 쌍의 모음으로 키가 중복될 수 없다.
*/