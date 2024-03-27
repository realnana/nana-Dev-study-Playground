# Test Server
> Naver Cloud Classic 플랫폼에서 데모버전으로 사용할 API와 템플릿을 구현한 레포지토리

[1. testapi (VPC용, 현재 모듈 이슈로 사용X)
> PostgreSQL + TypeORM + NestJS
- VPC 플랫폼에서 템플릿으로 사용할 예정 ]

---

## _**2. testcrud (Classic용, 3월 28일 기준 이 프로젝트 먼저 사용할 것)**_
> MySQL + TypeORM + NestJS
- Classic 플랫폼에서 데모버전으로 사용할 API

## 시작 가이드
---

### Requirements
- Node.js v21.7.1
- Npm v10.5.0
- NestJS v10.3.2

<br>

### Installation
```
$ git clone https://github.com/Nyu0Kim/testAPI.git
```
```
cd testcrud
```

### Run

```
$ npm run start
```

### Project Tree


```
testAPI
├─ .DS_Store
├─ README.md
├─ docker-compose.yml
├─ dummy.json
├─ index
└─ testcrud
   ├─ .DS_Store
   ├─ .eslintrc.js
   ├─ .prettierrc
   ├─ README.md
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ src
   │  ├─ crud
   │  │  ├─ crud.controller.spec.ts
   │  │  ├─ crud.controller.ts
   │  │  ├─ crud.module.ts
   │  │  ├─ crud.service.spec.ts
   │  │  └─ crud.service.ts
   │  └─ main.ts
   ├─ tsconfig.build.json
   └─ tsconfig.json

```


```

## License

Nest is [MIT licensed](LICENSE).
