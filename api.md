# Todo API Spec

## JSON Objects returned by API:

### User
```
{
  "user": {
    "id": 1,
    "email": "yoneda@yoneda.com",
    "bio": "hello, world",
    "createdAt": "2020-5-5 10:00:00",
  }
}
```
### Task
```
{
  "task": {
    "id": 1,
    "title": "clean my room",
    "checked": false,
    "createdAt": "2020-5-5 10:00:00",
    "updatedAt": "2020-5-5 10:00:00",
    "user": "1",
  }
}
```
## Endpoints:

### Login

`POST /api/users/login`

Example request body:
```
{
	"user":{
		"mail": "yoneda@yoneda.com",
		"pass": "yoneda"
	}
}
```
No authentication required, returns a [User](#User)

Required fields: `mail`, `pass`

### Logout

`POST /api/users/logout`

Authentication required

### List Tasks
`GET /api/tasks`

Authentication required, returnes array of [Task](#Task), possessed by an authenticated user.

### Create a Task
`POST /api/tasks`

Example request body:
```
{
  "task":{
    "title": "wash my hands",
    "checked": false,
  }
}
```
Authentication required, returns a [Task](#Task)

Required fields: `title`, Optional fields: `checked`

### Update a Task
`PUT /api/tasks/:id`

Example request body:
```
{
  "task":{
    "title": "wash my hands",
    "checked": false,
  }
}
```

Authentication required, returns a [Task](#Task)

Optional fields: `title`, `checked`

### Delete a Task
`DELETE /api/tasks/:id`

Authentication required

### Get a user
`GET /api/users`

Authentication required, returns a [User](#User)

### Create a user
`POST /api/users`

Example request body:
```
{
	"user":{
		"mail": "yoneda@yoneda.com",
		"pass": "yoneda",
    "bio": "hello, world"
	}
}
```

No authentication required, returns a [User](#User)

Required fields: `mail`, `pass`, Optional fields: `bio`

### Update a user
`PUT /api/users/:id`

Example request body:
```
{
	"user":{
		"pass": "yoneda",
    "bio": "hello, world"
	}
}
```

Authentication required, returns a [User](#User)

Optional fields: `pass`, `bio`

### Delete a user
`DELETE /api/users/:id`

Authentication required
