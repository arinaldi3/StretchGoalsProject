# Data models

## Class

| Name | Type | Unique | Optional |
|-|-|-|-|
| difficulty | string | no | no |
| class_size | integer | no | no |
| class_name | string | no | no |
| start | string | no | no |
| end | string | no | no |
| schedule | string | no | no |
| instructor | foreign key | no | no |

The `class` entity contains the data about a class that an instructor is teaching.

## Student

| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| password | string | no | no |
| first_name | string | no | no |
| last_name | string | no | no |
| email | string | yes | no |
| address | string | no | no |
| phone_number | string | yes | no |

The `student` entity contains the data about an student account.

## Instructor

| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| password | string | no | no |
| first_name | string | no | no |
| last_name | string | no | no |
| email | string | yes | no |
| address | string | no | no |
| phone_number | string | yes | no |
| certification | string | no | yes |
| yoga_studio | string | no | yes |
| demo | url | no | yes|
| instagram | url | yes | yes |

The `instructor` entity contains the data about an instructor account.

## InstructorVO

| Name | Type | Unique | Optional |
|-|-|-|-|
| import_href | string | yes | yes |
| username | string | yes | no |
| first_name | string | no | no |
| last_name | string | no | no |
| yoga_studio | string | no | yes |
| demo | url | no | yes|
| profile_picture | string | no | yes |

The `InstructorVO` entity contains the data about an instructor account after it's been polled and trims some of the original data.

## StudentVO

| Name | Type | Unique | Optional |
|-|-|-|-|
| username | string | yes | no |
| email | string | yes | no |
| first_name | string | no | no |
| last_name | string | no | no |
| phone_number | string | yes | no |
| _class | foreign key | no | yes |

The `StudentVO` entity contains the data about an student account after it's been polled and trims some of the original data.