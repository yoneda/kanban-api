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

### Check Authentication
Check if your client has certificate for Simple Diary API.

`GET /api/checkAuth`

Authentication required, returns a [User](#User) and status code 200, when you didn't login, returnes 401 Unauthorized

### List Notes
`GET /api/notes`

Authentication required, returnes array of [Note](#Note), possessed by an authenticated user.
