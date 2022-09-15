## Yoga Stretch Goals

* Alex Adams
* Ava Rinaldi
* Carlos Castillo
* Josh Lee
* Mindy Lin

A web application that provides an environment designed to connect yoga instructors to students.

The platform allocates virtual classes to instructors where they can host and teach classes of easy/medium/hard difficulties.

Students can access and signup for classes which will be displayed on their profile pages.


## Intended market

We expect private yoga instructors and yoga students to utilize this tool. 

On this web forum, there will be 3 distinctive roles:
* Administrators
* Yoga Instructors
* Yoga students looking to take instructed classes

## Functionality

  * Users can register as either a student or instructor.

  * Non-registered users have access to an about us page, login page, signup pages, and the main page.

  * Yoga instructors can upload a demo video to their instructor portal which will reflect on their profile and create classes.

  * Yoga students are able to sign up for an instructor's specific classes. A user must be signed in for a class in order to access class videos.

  * Yoga students will have access to a list of instructors. In the list, there will be a button that directs to each instructors individual page containing a list of classes they are teaching and their demo video.

  * Both students and instructors will have their own individual profile pages

## Project Setup
* Run cmd 'Docker volume create stretch-data'
* Run cmd 'Docker volume create pgadmin'
* Run cmd 'Docker-compose up'

## Frontend Unittests
All frontend unit tests are in App.test.js. The tests are labeled to show who wrote which tests.

## Backend Unittests