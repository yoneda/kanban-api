# todo-api

add some comments

## Stack
* Typescript (Static Typing)
* Express (REST API)
* Knex (SQL Query builder)
* SQLite (Database)

## Setup
add some comments

## API Spec
### JSON Objecft returned by API:
#### User
```
{
  "user": {
    "id": 1,
    "account": "yoneda",
    "email": "yoneda@yoneda.com",
    "bio": "hello, world",
    "createdAt": "2020-5-5 10:00:00",
  }
}
```

#### Task
```
{
  "task": {
    "id": 1,
    "title": "clean my room",
    "createdAt": "2020-5-5 10:00:00",
    "updatedAt": "2020-5-5 10:00:00",
    "user": "yoneda",
    "cardId": 1,
  }
}
```
### Endpoints:
#### List Tasks
`GET /api/tasks`

Authentication requied, will return array of [Task](#Task), only possessed by login user


#### Create Task
`POST /api/tasks/:id`

Example request body:
```
{
  "task": {
    "title": "sleep a lot",
    "cardId": 2
  }
}
```
Required fields: `title`, `cardId`
Authentication requied, will return a [Task](#Task)

#### Update Task
`PUT /api/tasks/:id`

Example request body:
```
{
  "task": {
    "title": "sleep a lot",
    "cardId": 2
  }
}
```
Required fields: none
Authentication requied, will return a [Task](#Task)

#### Delete Task
`DELETE /api/tasks/:id`

Authentication requied

## Todo
- [ ] more detail api spec
- [ ] implement api
- [ ] more detail typescript
- [ ] add express-validator to ensure required fields
- [ ] add CI/CD and integrate newman tests
- [ ] add newman tests
- [ ] (experimental) generate postman api documents

## License
add license