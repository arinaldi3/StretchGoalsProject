## 8/16

- Worked on the GHI.md file.
- Used Excalidraw

## 8/18

- Group pair programmed to establish docker-compose.yml
- Created frontend files
- Talked about the design of overall project

## 8/19

- Major blocker with Docker not running containers
- Solution not resolved tried implementing various options given by instructors and group and no luck

## 8/22

- Talked about how we wanted to design the nav bar
- Worked on creating the forms for create class, instructor, student
- Worked on setting up the project to get it to run as a group

## 8/23

- Worked on the two lists for instructors and classes
- I am unable to code because my computer crashes so I am pair programming throughout the whole project
- Talked about the design of the project as there was some confusion as we started working on the frontend

## 8/24

- Worked on Create students. Got it to connect with the backend
- Current blocker is creating instructors. Having a odd error that we are missing a field but have added it and still is not showing
- Which was also a blocker we had in the afternoon but we got it to work but were unsuccessful with the other form which should've been identical.(createinstructor and createstudent)

## 8/29

- Not much coding done. Spent the day doing some discovery on how to get the login page to submit successfully using authentication. Did some testing but was unable to get it to work

## 8/30

- Day two of working on the login page. Using the cookbook auth provided on learn, we were able to get further. Update after working on it in the afternoon we were able to connect the necessary endpoints and generate the cookies for each user. Additionally added the functionality to be able to logout.

## 8/31

- Success: We were able to implement functionality to where if someone is logged in, they are able to see certain buttons on the Nav bar.
- Blocker: Major blocker is to distinguish between our two potential users. For instance if instructor or student signed in we would want that user to only have options relating to them. Not sure how we will implement this functionality but further discovery will be done. Talked as a group if we want to implement it only on the front-end or using the backend. Either route we choose will involve implementations to certain already functional pages so weighing the pros and cons.

## 9/1

- Today we got passed our blocker where the user logged should only see information related to the user. Josh, was able to figure it out using a global state for the user's username. He also implemented a filter on the portal's and a function into the login page so that it could store the username to reference from the filter.

## 9/6

- Spent the day as a group debugging our Auth. Initially we believed this blocker was resolved last week but the functionality is still not differentiating users signed in. It seems as if when we were testing, we were testing on a glitchy server.

## 9/8

- As a group we were able to get pass out blocker. Our blocker involved specific navigation buttons to appear depending on the user logged in. For example, if an instructor was logged in he/she should not have student profile on page. Spent the rest of the day talking about some CSS for the project.

## 9/9

- Today we ran into an unintentional blocker. We were testing on a separate branch and there must’ve been a mistake of an accidental push and merge to main. Some files were pushed to main that were still being tested. Spent the day researching how to revert back to commit with working version of main.

## 9/12

- Today we broke off into our front end team to discuss how it is we were going to make the attend class functional to where the user clicked on the button, and it would sign them up to the class. The functionality should also populate the class in the students portal of the classes they are planning to attend. We weren’t able to get it working but will be continuing in the morning.

## 9/13

- Side note - wasn’t feeling well today but pushed through. Continued where we left yesterday and succeeded by changing some of the backend. We had to change some of the models and views to allow us to retrieve the content that was set as student. After that change, we could hit that endpoint with the front-end and populate the list of classes signed up for on the student portal.

## 9/14

- Lots of progress made today. Able to populate classes student wishes to attend and list of classes instructor creates. Also fixed a bug where it was only only working with one of the students and instructors. It seems we hard coded for only id. 1 in students and instructors to work. Minor work done on forms to navigate to portals after submitting. Started working on the unit tests. Very basic test at the moment, will work on more unit tests tomorrow.

## 9/15

- Overall out MVPs were done other than the unit tests. We focused on writing our unit tests on the front end using React Library with Jest. After completing that we fixed on minor modifications to show a message if there are no classes signed up for or classes to attend. Also, we updated our ReadMe to make it presentable for visitors to start up the project.
