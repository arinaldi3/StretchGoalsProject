# APIs

## Get a list of available classes

* **Method**: `GET`
* **Path**: /api/classes

Input:

Output:

```json
{
    "difficulty": string,
    "class_size": integer,
    "class_name": string,
    "start": string,
    "end": string,
    "schedule": string,
    "instructor": string,
}
```

Getting a list of classes with each of the model form fields 
provided in a table. Returns a list of classes in dictionary format.

## Get a list of instructors

* **Method**: `GET`
* **Path**: /api/instructors

Input:

Output:

```json
{
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string,
    "certification": string (optional),
    "yoga_studio": string (optional)
}
```

Getting a list of instructors with each of the model form fields 
provided in a table. Returns a list of instructors in dictionary format.

## Create a new class

* **Method**: `POST`
* **Path**: /api/classes

Input:

```json
{
    "difficulty": string,
    "class_size": integer,
    "class_name": string,
    "start": string,
    "end": string,
    "schedule": string
}
```

Output:

```json
{
    "id": integer,
    "difficulty": string,
    "class_size": integer,
    "class_name": string,
    "start": string,
    "end": string,
    "schedule": string
}
```

Creating a new class using a form with fields. It returns 
all of the form fields with the new database id.


## Create a new a user account

* **Method**: `POST`
* **Path**: /api/users/create

Input:

```json
{
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string
}
```

Output:

```json
{
    "id": integer,
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string
}
```

Creating a new user using a form with fields. It returns 
all of the form fields with the new database id.

## Create a new a instructor account

* **Method**: `POST`
* **Path**: /api/instructors/create

Input:

```json
{
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string,
    "certification": string (optional),
    "yoga_studio": string (optional),
    "demo": string,
    "instagram": string,
}
```

Output:

```json
{
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string,
    "certification": string (optional),
    "yoga_studio": string (optional),
    "demo": string,
    "instagram": string
}
```

Creating a new instructor using a form with fields. 
It returns all of the form fields with the new database id.

## Edit a class

* **Method**: `GET`
* **Path**: /api/classes/edit

Input:

```json
{
    "difficulty": string,
    "class_size": integer,
    "class_name": string,
    "start": string,
    "end": string,
    "schedule": string,
    "instructor": string,
}
```

Output:

```json
{
    "difficulty": string,
    "class_size": integer,
    "class_name": string,
    "start": string,
    "end": string,
    "schedule": string,
    "instructor": string,
}
```

Submits a PUT request to edit an existing classes form fields.
Returns the details of edited class in dictionary format. 