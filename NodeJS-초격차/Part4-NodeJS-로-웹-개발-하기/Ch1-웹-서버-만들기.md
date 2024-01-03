## Node.js로 웹 개발하기

### Keywords

> 웹 서버, HTTP Requests & Response, Stateless Protocol, HTTP Status Codes, HTTP Routing


----

### 1. 웹 서버

- 브라우저(클라이언트)가 웹 서버에서 호스팅되는 파일을 필요로 할 때 => HTTP를 통해 파일 요청
- 올바른 요청 시 -> HTTP 서버는 요청 수락 -> 요청된 문서를 찾음
- HTTP를 통해 브라우저로 다시 보냄
- 요청한 문서를 찾지 못할 시 404 응답

예시)
- 클라이언트 : www.naver.com 주소 요청 -> DNS Server는 11.11.11.11 IP Address 응답
(이 과정은 처음만 하고 DNS Cache에 보관)


----

### 2. HTTP

HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜(약속)