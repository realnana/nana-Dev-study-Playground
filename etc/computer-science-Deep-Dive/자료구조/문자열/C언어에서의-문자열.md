## 문자열(String)

- C언어에는 문자열 자료형이 따로 존재하지 않는다.
- C는 문자열 리터럴을 "문자형 배열"로 취급한다.
- 문자열은 char 타입의 배열의 각 칸마다 문자 하나씩 저장됨
- char 타입의 배열에 저장될 시 null character('\0')이 문자열의 끝을 표시한다.
```C
char str[6];
str[0] = 'h';
str[1] = 'e';
str[2] = 'l';
str[3] = 'l';
str[4] = 'o';
str[5] = '\0';
```

- C언어는 문자열을 생성하는 편리한 방법을 제공
```C
char str[] = "hello";
// 혹은
char *str = "hello";
```
- 마지막 포인터 변수를 이용하여 정의된 문자열은 수정이 불가능하다

    - string literal이라 부름

---
## string.h 라이브러리 함수
> string.h 라이브러리는 문자열을 다루는 다양한 함수를 제공

- strcpy : 문자열 복사
- strlen : 문자열의 길이
- strcat : 문자열 합치기
- strcmp : 문자열 비교