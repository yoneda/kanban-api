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
#### Card
```
{
  "card": {
    "id": 1,
    "title": "in progress",
    "createdAt": "2020-5-5 10:00:00",
    "updatedAt": "2020-5-5 10:00:00",
    "user": "yoneda",
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

## License
add license