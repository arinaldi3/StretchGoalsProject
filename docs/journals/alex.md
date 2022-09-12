## Aug 17, 2022

Made a journal. Decided on django. Created project outline on google docs. Had a good time doing so.

# Aug 18, 2022
Today my goal is to have most of the outline for the project sculpted so we have clear goals and structure to then "divvy out". It seems that the flow of the project combined with the daily work in class is a bit fragmented - it makes it hard to focus on this project with full attention. 

Created skeleton
installed react app
installed django - created 3 django projects, levels, accounts, and classes
configured all of the django settings, urls, databases, dockerfiles, gitignores, common, api structure, and optimized the file structure. 
Changed database from sqllite3 to postgres, imported dj_database_url to autofilter to correct database on all 3 services.
Installed bootstrap. Installed tailwind

uninstalled tailwind because paywall. 
full revamp after reinstall. 
added .env file for api keys
downloaded django rest api framework 
added localhost to the allowed hosts list on all 3 projects(will obviously have to fix later)

react broke because file structure was nonlinear

all of the django apps are broken because of some setting. working on fixing this slowly.

after cross-checking every file, spelling, etc:
I found that if you do not include urlpatterns in a urls.py file - everything breaks with a Code 1 in docker (can't find account/etc presumably because of runtime loop). Docker is now working, react is now working, can start front-end framework.

started working on front end for visibility 
made a quick logo, found a quick background, attempted to get a basic main page with a basic nav bar live

issue with react's browser router- react-router-dom can't be found
tried to install with a --save at end but no luck currently. still cannot see the react router. 

# Aug 20-22 (Weekend and Monday)

Restructured docker-compose.yaml to work for carlos. Needed to force the create multiple databases file to be executable by creating a unique dockerfile command for it. Consolidated the data structure and established a pgadmin volume for testing and later functionality. Started working on accounts models and views but did not make much progress because of the docker blocker. 

# Monday only:
Pair programmed w/ Josh the accounts models and views for authentication purposes while designing the structure around our desired models. 
Accounts views/models 

# Aug 23, 2022

Worked with Josh to fix the account model and view structure. Clarified overarching project structure in a standup and built new excalidraw to reflect the structure (from backend to frontend compatibility). We asked Dalonte for help with the docker blocker but did not have success. I built an app from scratch using pieces of our current code to find the error, and found that it was AUTH_USER_MODEL in the settings. Not sure if this is required but now we can isolate this issue moving forward. 

# Aug 24, 2022

Built out all the levels views/models/urls. Each has a symmetrical get/post/delete/update structure and will have an assigned list of requirements as well as a badge that will be placed on their profile. Then I built the pollers for classes and levels to equalize the instructorVO.

Spent the rest of the evening troubleshooting pollers on a local repo and then switched gears to studying hosting. Turns out heroku will be losing its free functionality so I am going to try to host it via AWS Elastic Beanstalk.

# Aug 25, 2022
Initialized the process of hosting on Elastic Beanstalk.
I already acquired a domain name but getting a SSL for NGINX without paying 65/yr has been tricky.
I've been attempting to generate an ssl CA variant through the git bash with limited luck.
After few hours of struggle, I haven't been able to get a consistent SSL code and Dalonte told me about amazon S3 which is in line with what I was working on but significantly less secure. 

# Aug 26-28, 2022 (weekend)
I spent another 5-6 hours working on this SSL cert and have hit a bit of a wall trying to intepret the linux bash structure. 

# August 29, 2022
Going to finalize the structure for AWS S3, starting with completing the requirements.txt.

https://073993208930.signin.aws.amazon.com/console amazon console signin location
Got aws s3 console set up. set up settings enpoints and installed all the necessary apps in all 3 microservices. Set up the domain stretchgoalz(purchased on godaddy) root host and the subdomain (www.stretchgoalz.com) on aws terminal. 

# August 30, 2022
Spent the day investigating AWS connection and determined that though most of it free, domain hosting and the final steps of the way are blocked by a cost barrier. I may revisit this and move forward anyways and just pay the fee but I made limited progress trying to get anything to work. I branched out to 

# August 31, 2022
Discovered a hosting service called Render. Spend day troubleshooting some backend issues with docker and will probably start tomorrow with a fresh repo before pushing anything out. 

# September 1st, 2022
Attempted to get render working but it feels like heroku and discovered a service called Vercel - going to test it tomorrow but it seems extremely simple.
Spent the rest of the day troubleshooting backend for nginx and getting the docker container to work on a seperate repo (which is why I can't push). It'll be nice to finally be able to push updates after a full week of struggling with deployment.  

# September 2nd, 2022
Tried Vercel, I'm surprised with how insanely easy it is to use. Didn't have much time to do anything but prelim setup but was also troubleshooting auth on the backend.

# September 6th, 2022
Began preliminary configuration and got Vercel to have a live deployment (without the containers working properly)

# September 7th, 2022
After extensive research, found that Vercel is compatible with a live deployment without the use of docker and have been testing on a GitHub repo (to not conflict with the original one).

# September 8th, 2022
