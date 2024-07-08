## Set

> 자바스크립트의 내장 객체, 고유한 값들의 컬렉션을 저장하는데 사용됨

- 중복된 값을 허용하지 않는 배열과 유사
- Set 객체는 값의 삽입 순서를 기억, 반복 가능한(iterable) 객체

---

### 특징

1. 고유성 : 각 값은 컬렉션에서 유일해야 함
2. 순서 : 삽입된 순서대로 값을 유지
3. 유형 무관 : 각 값은 모든 데이터 유형을 가질 수 있음
4. 반복 가능 : 'for ... of' 루프나 'forEach' 메서드를 사용하여 값을 반복 가능

---

### Set 생성 방법

1. 빈 Set 객체 생성

```javascript
const mySet = new Set();
```

2. 초기 값이 있는 Set 객체 생성

```javascript
const mySet = new Set([1,2,3,4,5]);
```

3. 문자열 또는 다른 자료형을 포함한 Set 객체 생성

```javascript
const mySet = new Set(['apple', 'banana', 'orange']);
```

---

### Set의 주요 메서드와 속성

- add(value) : Set에 값을 추가
- delete(value) : Set에 값을 제거
- has(value) : Set에 특정 값이 있는지 확인
- clear() : Set의 모든 값을 제거
- size : Set의 요소 개수를 반환


---

### Set의 반복

> Set은 반복 가능한 객체.

```javascript
const mySet = new Set([1,2,3,4,5]);

// for ... of 루프 사용
for (const value of mySet) {
    console.log(value);
}

// forEach 메서드 사용
mySet.forEach(value => {
    console.log(value);
})
```