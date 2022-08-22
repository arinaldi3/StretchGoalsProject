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
| instructor | string | no | no |

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