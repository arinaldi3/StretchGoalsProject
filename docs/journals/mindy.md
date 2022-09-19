## 9/16/22
- Today is the due day! We spent time on some CSS and checked code cleaness. We checked all functionalities and made sure they are working. We wanted to ensure the project is ready to be submitted.
- We also plan to continue working on this project for the presentation tomorrow. 

## 9/15/22
- Today we started writing our unit tests for the front end. We tested if different pages rendered properly for users.
- We (Ava, Carlos, and I) wanted to have the feature of checking if there are any classes available on 3 different class lists (list of all classes, list of classes created by an instructor, and list of classes selected by a student). If there is no class data, these 3 lists will return a string telling the user that no class is available at the moment; otherwise, they will return corresponding class data.
- We got together as a group and discussed the website logo, website background, and other styling elements. We tried to wrap things up before tomorrow.

## 9/14/22
- We made quit a progress today! Ava, Carlos, and I continued working on MyClassList for StudentProfile and it is finally working! We created multiple instructors and students to test the functionalities (MyClassList for both instructor and student) are working for all users. 
- We started working on writing unit tests, and thanks to Dalonte's help.
- I fixed the problem on the InstructorProfile page and change the StudentProfile page to the same format for a better user experience. 

## 9/13/22
- Today Ava, Carlos, and I continued working on the MyClassList from yesterday. We thought we had it working before the end of the day; however, it turned out that only work for the student user we used and didn't work for a new student user we just created. We stayed until 7:30 and still couldn't make it work. We are for sure going to continue working on that tomorrow.
- We planned to have a similar MyClassList for instructor users, where the instructor will be able to see a list of classes that he/she created inside the profile page. We discussed how to make it work, but we did not have enough time to complete it during our group project time. I spent some time working on it after class, and I am very pleased that the MyClassList for an instructor is working!
- I also spent some time working on the InstructorProfile page and tried to change the table to a user profile page for a better user experience. The page is showing some tiny problems, plan to continue working on that tomorrow. 

## 9/12/22
- Today we were working on adding attend button to each class on the classeslist page, and tried to add classes that the current user clicked on to the user's profile page. We had some problems with adding these classes to the profile page, and Zach came to help us with it. We did not finish this function by the end of the day as we not only need to implement the handleAttend function on the front-end but also need to change some stuff on the back-end such as changing Class models' student property from one-to-many relationship to many-to-many relationship. We are going to continue working on this tomorrow.

## 9/9/22
- We tried to rebuild our Docker and test functions we have. After rebuilding our Docker, the authentication seems not working: the website indentified we as a logged in users before we create an account. We thought something wrong with the files I created last night, and we tried to go back to out last git commit before I created thoes files.
- I found out that cached cookies were the reason for the authentication fail. We fixed the authentication problem by clearing cached cookies and data. I think it's very userful tip to remember to clear cached cookies and data for any future projects when we rebuild our database.

## 9/8/22
- We found a problem with Navbar, and we were able to fix it with Cooper's help. We are able to show different links on the navbar for different users.
- I created different files on a separate branch to change the Class List and Instructors List from table to cards. We all think cards look better and will improve the user experience, so adding these files to our main branch. We plan to work (styles and adding more details) on these files tomorrow.
- Talked with Ava and Carlos about things we want to work on tomorrow. 

## 9/7/22
- Today we contunied working with what we left from yesterday and tried to pass the authentication blocker as a group. We spent so much time on it, discussed with our SEIRs and Will, and we finally have it working. Thanks to our SEIRs, Will, Josh, and everyone in the group! We can finally move on to other parts tomorrow. 

## 9/6/22
- Our user profile page is not working, and we could not figure it out by ourselves. We spent hours with Cooper and could not figure it out. We are planning to spend more time on it tomorrow. 

## 9/1/22
- We did not split into two team, instead, all of us were together and tried to pass our blocker. Josh updated the App.js file to have a global state for the user's username. He also implemented the filter on the student portal and the setUser function into the login page to show the profile oage for the logged in user. We will continue working on it tomorrow as well.

## 8/31/22
- We were able to make only signup and login buttons to show on the Nav bar if the user is not logged in or does not have a account with us
- We tried to show the specific user (a student or an instructor) of their personal profile page and we had some blockers. After discussing with Cooper and Dalonte, we realized that we could implement it on the front end or combined with the back end. We planed to have more discussion tomorrow regarding which routes we are going to use.

## 8/30/22
- The CreateClass page was not working on my end, and we made some tiny edits to have it fixed. Now everyone is on the same page.
- We spent the day working on authentication and we expected this would be a big blocker for us.
- We first tried to figure it out using the Authentication Cookbook on Learn as reference, and we spent a lot of time discussing and playing around with it.
- We still could not get the authentication to work after our lunch break, and we asked our SEIRs for help. Thanks to Cooper and Zach, we were able to get this big blocker out of the way! The error messages were very annoying, but we've learned a lot through fixing those error messages. Huge thanks to our SEIRs and the team!

## 8/29/22
- We first started with discussing with Cooper (SEIR) on our Login page and authentication, and we spent some time on our own research on it as well.
- Ava, Carlos, and I continued to work on the front end. Josh finished making bug fixes on the backend, so we were able to test the classesList and the createClass form.
- I have created a separate branch to make cards for InstructorsList and ClassesList. The basic cards were created, but need to spend more time on them tomorrow. 

## 8/25/22
- Ava, Carlos, and I continued to work on the front end and had a lot of discussions with the back end team to make sure that we are on the same page.
- We had the instractorsList page working with real data, and we had the createInstructor page working as well.
- We planned to make classesList and createClass work once the beck end team is finished with classes.
- We planned to continue working on Login and authentication/authroization next week.

## 8/24/22
- We tested on create forms, CreateStudent and CreateInstructor. 
- We were having problems with creating student and creating instructor. We worked together as a group and solved the problem for creating student.
- We are going to continue working on fixing the CreateInstructor form.

## 8/23/22
- Got together with all members and did a quick standup, and shared any questions and updates on the project
- Pair programmed with Ava and Carlos, and created two lists, ClassesList and InstructorsList
- We also reviewed our work from yesterday, and updated those files 
- I am very happy with what we have done so far!

## 8/22/22
- pair programmed with Ava and Carlos on the frontend. We firts worked together on Ava's screen. We worked on Nav.js, App.js, CreatStudent form, and CreateInstructor form
- We then worked together on my screen. We created InstructorsList, ClassesList, and completed the createClass form.
- We also spent some time to looked at the render pages that we worked on, and discussed together regarding page design and user experience. It was great working together and I think we've made quite progress today!

## 8/19/22
- We roughly discussed our individual roles in the project, and we all agreed that we will keep each other updated on the progress
- Josh did a mini lecture on React using functions instead of classes for the rest of our group as we all agreed to use functions for this project
- We all tried to run our project on Docker, and had some issues. The Docker containers were running fine for Alex and Josh, and weren't running correctly for Ava, Carlos, and me. We first disscussed together and tried to figur out the problem, and then the SEIRs (Allisha and Zach) came to help us. We finally have it fixed with Dalonte's help. I am glad that we can get Docker working and moving forward

## 8/18/22
- Disccussed and established docker-compose.yml with other group members
- Created frontend jsx files
- Updated our README after receiving feedback from Dalonte
- Went through project design again as a group and made sure we are on the same page

## 8/17/22
- Our team decided to use Django for the project framework
- Went through the Project Outline with team members
- Created mindy.md for journls

## 8/16/22
- Created create-instructor.png

## 8/15/22
- Our team decided to create an application for providing an environment to connect yoga instructors to students with the goal of providing classes for students

