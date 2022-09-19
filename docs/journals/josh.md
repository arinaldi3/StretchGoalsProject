## 8/15: 
Our group ended up choosing Yoga classes and instructors as the topic. I tried to ask a lot of questions today because it's not my field of expertise but I did want a workable understanding of the field. Mostly we just tried to talk about goals and finish the readme. At this point, I'm still a little foggy on some things but I have enough of an understanding to start moving forward.

## 8/16: 
I wrote out a lot today in the docs. I feel pretty good about things now and since we are likely going to decide to go with django, I'm feeling confident that I can translate our ideas into actual code. I also am happy with my contributions. Personally I felt like I led a lot of the design discussion regarding the microservices and breakdown of the project. I primarily worked on the apis.md and data-models.md. Carlos took the lead on the ghi.md and wireframe drawings. Think he did an excellent job and I'm grateful he also included a rough domain design sketch.

## 8/17: 
Today was mostly just making sure everyone was on the same page and what tech stack we were agreeing to use. The topic of contention was back-end implementation using fastapi or django and we ultimately decided on django. I'm happy with that decision.

## 8/18: 
Talked about docker compose and started designing it together as a team of 5. Then we went over a review with Dalonte and received some feedback regarding our functionality so we decided to change classes to have videos instead of livestreams and keep livestreams as a strech goal while removing a payment structure from our goals. Finally, we updated to readme to have more clarification regarding what non-registered users can do. Currently, we're still in the process of figuring out who will be in charge of what. I'm hoping for back-end work but I think I will probably have to act as a fill and try to do what other people are uncomfortable doing.

## 8/19:
Today we had to resolve a ton of docker issues. For some reason, the project containers were running fine for Alex and I but not for the rest of our group. Unfortunately, that headache took most of our time today but thanks to Dalonte, we did eventually manage to find a fix. While we were waiting, I gave a mini lecture on how to write react functional components and implementation of a search bar. We also discussed who will want to work on what area in the project so that we are ready to start working come monday. I'm feeling relieved that we fixed the docker issues.

## 8/22:
Today I pair programmed with Alex on creating the backend for accounts and setting up authentication using jwt. I also went ahead and updated our api.md and data-models.md file to match what we decided as good structure for the backend. Then I worked on creating the views for both students and instructors in their entirety along with Alex. Along the way, we decided to make a few design changes and after every change, I was reminded how important documenting what we are trying to do is as it made it much more seamless to make changes. Overall I'm happy with the amount of work I accomplished today. While there is still some discovery and testing to be done with the account authentications, the overall backend of accounts is mostly completed thanks to our (Alex and I) efforts. There will be a couple more things to note, including the pexels integration for the profile picture but we don't foresee this as a tough blocker in any way. Feeling good :) 

## 8/23:
Currently our accounts models aren't working and am going to start the day by having an idea of what to implement and how. Going to ask Dalonte for some help translating what I have from class form to function form in django. So after spending a lot of time doing discovery today on authentication and authorization, we have determined that the frontend should be responsible for managing authorization/permissions and discussed future implementation as a group. Alex and I also spent a large chunk of time debugging the backend and after quite a bit of googling/testing, we have managed to fix our docker container and are finally comfortable with the current state of accounts. We also had a standup in the morning talking about design as a whole and modeled microservice interactions to demonstrate which I personally found quite helpful. Overall, I'm feeling a bit worn out from debugging but just glad that we have something that works now.

## 8/24:
Today I also did a lot of bug fixing, and had to clean up some of the code in the views and acls file for accounts. On top of that, I worked to help fix quite a few bugs on the frontend. I also built the basic functionality for classes in the views file today along with the encoders. I've yet to update the urls will probably get to that tomorrow but am pretty pooped out for now. Not related to the project but I also gave a short lecture on how to do the practice problem for today in an efficient way and why it works. I feel a little bad because the front-end team had a blocker caused by us on the backend and they had to kind of divert from their original schedule because of the blocker but thankfully everything is working now.

## 8/24:
Today I started off by fixing some conflicts in git. One of our files specified under git ignore wasn't being ignored so I spent some time finding a way to remove it. It ended up being a pycache file and at some point we had pushed a change to the file before it was ignored so the git remote was looking for changes to that file every time. I also finished building most of the classes microservice and made sure that the poller works as well. This was a huge jump foward today. I'm content with the progress I made and will likely spend time today trying to do some discovery on authorization to help the front end team.

## 8/29:
Today I fixed some bugs for the classes microservice, and adjusted our poller. The issue ended up being a problem with the endpoint url but spent a couple hours just trying to find it. To be specific, I fixed the encoders which were causing problems in the create view, and fixed a url in the poller. Also doing some more discovery on authentication/authorization. Content with today, lot of planning and talking in stand up today. Tomorrow I think we will all have a more fleshed out idea of our end goal given current timelines for our project.

## 8/30:
Today apart from yet again cleaning up some of the code, this time in accounts microservice, we as a group spent most of our time going through authentication. We had Zach and Cooper helping us today and it was pretty much a peer learning/developing environment. Really proud of Ava too, she was taking a lot of the intiative with authentication and I think she did an awesome job. After that process, we seem to have finally got the login working with the tokens, just need to do a little tinkering for the logout and we're good to go on authentication. We'll see how feasible implementing authorization/permissions after finishing this is. I imagine tomorrow we will talk more about deployment, which Alex has primarily been working on.

## 8/31:
Today we worked more on authorization/authentication. We've run into quite a few blockers today and I have some thoughts for what to try tomorrow but am a little worn out from trying different things without much success. I also discussed deployment options for a while with Alex as we are considering what to do since Heroku's free services will be not free starting November. Not feeling the best today but will see what I can do.

## 9/1:
Today I updated the React App to have a more global state for the user's username and passed that in as props for all the components requiring that information. I also implemented a filter on the student portal and passed the setUser function into the login page so that it stores the username to reference for our filter.

## 9/6:
We spent most of our time dealing with a blocker that we thought we fixed last week regarding holding current user state and updating the navbar after login. I also spent a portion of my time updating the class model so that it can be linked to students using a foreign key with the end goal being to let students sign up for classes.

## 9/7:
Today I spent 90% of my time resolving the aformentioned blocker and I finally managed to do it! I feel bittersweet because it took so many man hours but also I did it and I feel like a much more knowledgable person on authentication. I also figured out how to fix the navbar reloads and conditional statements in it so while there is a little more work to do, the front end side of things has a clear path foward. For tomorrow, I plan to implement a custom view function to sign students up for classes and I'll be good to go. I've also added to the data-models documentation and edited the models within the classes microservice today. Feeling good :)

## 9/8:
Today I helped figure out a way to refresh the navbar on the front end once the user logs in and indicate a way for certain navbar links to show when the user is a student or instructor. I also was in the process of creating and testing a custom view function for attending/signing up for the classes to use for a sign up page.

## 9/9:
Today I spent time helping resolve some git issues and the rest of my time trying to do more discovery for testing in django. I'd say that today was definitely a day where I feel like I didn't get as much done because of the git blocker and didn't write much code either because it was mostly discovery but I'm getting closer to figuring out how to do things.

## 9/12:
Today I spent more time doing discovery for testing, and also helped clarify some things for the attendance functionality in the front end. Tomorrow I should begin writing some more tests for token authentication.

## 9/13:
Today I wrote some tests to test token authentication in the morning as well as give some input for getting the current user in the backend. Zach was helping out a lot on the latter. I still think my understanding of tests is a bit hazy but it's improving.

## 9/14:
I took a sick day today because some big apartment situations happened. I still communicated with my time and worked a little at night but couldn't do much during the day for a lot of reasons.

## 9/15:
Today I spent some time building out routing for the front end. We are going to be including an about us page and a profile page for instructors that students can see. Doing some discovery on certain hooks I haven't used before the get the id in the url like useParams. Also discussing what our mvp and presentation is gonna look like. Should be ready to go tomorrow!

## 9/16:
Finally done just added some tests on my end.
