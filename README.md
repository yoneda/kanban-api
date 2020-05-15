# kanban-api

add some comments

## Stack
* Typescript (Type Definition)
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

## License
add license