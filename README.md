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
├─ docs
│  ├─ MySQL-Docker-Image-Download.md
│  ├─ README.md
│  └─ TODO
└─ testcrud
   ├─ .eslintrc.js
   ├─ .prettierrc
   ├─ README.md
   ├─ dist
   │  ├─ app.module.d.ts
   │  ├─ app.module.js
   │  ├─ app.module.js.map
   │  ├─ config
   │  │  ├─ typeorm.config.d.ts
   │  │  ├─ typeorm.config.js
   │  │  └─ typeorm.config.js.map
   │  ├─ main.d.ts
   │  ├─ main.js
   │  ├─ main.js.map
   │  ├─ products
   │  │  ├─ dto
   │  │  │  ├─ create-product.dto.d.ts
   │  │  │  ├─ create-product.dto.js
   │  │  │  ├─ create-product.dto.js.map
   │  │  │  ├─ index.d.ts
   │  │  │  ├─ index.js
   │  │  │  ├─ index.js.map
   │  │  │  ├─ update-product.dto.d.ts
   │  │  │  ├─ update-product.dto.js
   │  │  │  └─ update-product.dto.js.map
   │  │  ├─ product.entity.d.ts
   │  │  ├─ product.entity.js
   │  │  ├─ product.entity.js.map
   │  │  ├─ products.controller.d.ts
   │  │  ├─ products.controller.js
   │  │  ├─ products.controller.js.map
   │  │  ├─ products.module.d.ts
   │  │  ├─ products.module.js
   │  │  ├─ products.module.js.map
   │  │  ├─ products.service.d.ts
   │  │  ├─ products.service.js
   │  │  └─ products.service.js.map
   │  └─ tsconfig.build.tsbuildinfo
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ src
   │  ├─ app.module.ts
   │  ├─ config
   │  │  └─ typeorm.config.ts
   │  ├─ main.ts
   │  └─ products
   │     ├─ dto
   │     │  ├─ create-product.dto.ts
   │     │  ├─ index.ts
   │     │  └─ update-product.dto.ts
   │     ├─ product.entity.ts
   │     ├─ products.controller.ts
   │     ├─ products.module.ts
   │     ├─ products.service.ts
   │     └─ test
   ├─ tsconfig.build.json
   └─ tsconfig.json

```

## License

Nest is [MIT licensed](LICENSE).

