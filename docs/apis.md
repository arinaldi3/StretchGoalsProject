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


## Create a new a student account

* **Method**: `POST`
* **Path**: /api/students/create

Input:

```json
{
    "username": string,
    "password": string,
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
    "username": string,
    "password": string,
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string
}
```

Creating a new student account using a form with fields. It returns 
all of the form fields with the new database id.

## Create a new a instructor account

* **Method**: `POST`
* **Path**: /api/instructors/create

Input:

```json
{
    "username": string,
    "password": string,
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
    "id": integer,
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

* **Method**: `PUT`
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

## Edit an existing student account

* **Method**: `PUT`
* **Path**: /api/students/edit

Input:

```json
{
    "username": string,
    "password": string,
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
    "username": string,
    "password": string,
    "name": string,
    "email": string,
    "address": string,
    "phone_number": string
}
```

Submits a PUT request to edit an existing student account's model fields.
Returns the details of edited student account in dictionary format. 

## Edit an existing instructor account

* **Method**: `PUT`
* **Path**: /api/instructors/edit

Input:

```json
{
    "username": string,
    "password": string,
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
    "id": integer,
    "username": string,
    "password": string,
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

Submits a PUT request to edit an existing instructor account's model fields.
Returns the details of edited instructor account in dictionary format. 

## Delete an existing class

* **Method**: `DELETE`
* **Path**: /api/classes/delete

Input:


Output:



Deletes an existing class and returns nothing.

## Delete an existing student account

* **Method**: `DELETE`
* **Path**: /api/students/delete

Input:


Output:



Deletes an existing student account and returns nothing.

## Delete an existing instructor account

* **Method**: `DELETE`
* **Path**: /api/instructors/delete

Input:


Output:



Deletes an existing instructor account and returns nothing.

