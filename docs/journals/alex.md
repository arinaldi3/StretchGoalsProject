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

Weekend 8/20-Monday 8/22

Restructured docker-compose.yaml to work for carlos. Needed to force the create multiple databases file to be executable by creating a unique dockerfile command for it. Consolidated the data structure and established a pgadmin volume for testing and later functionality. Started working on accounts models and views but did not make much progress because of the docker blocker. 