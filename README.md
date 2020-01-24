# CodeYourFuture Scotland portal

This is the CYF Scotland portal which contains the syllabus and useful information for students and mentors.

## Getting started

Start up a local server

```
cd website
npm install
npm start
```

## Deployment

Deploy to https://codeyourfuture.github.io/scotland/

```
cd website
GIT_USER=<git-user> CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
```
