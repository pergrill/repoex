## Description

Example of repository pattern using NestJS and Mongoose

Only one model is created in this example (_Company_)

Only the following files are coupled to the database

- base.model.repository
- company.model.repository
- company.model.module

When accessing the Company model, always use the methods in _company.model.service.ts_
This way the company module and repository can be changed to use another database without changing any code in the modules folder.

Se the controller and service under /modules/company/ for example of accessing the company model

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

[MIT licensed](LICENSE).
