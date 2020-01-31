# CodeYourFuture Wiki

This is the CYF Wiki. It contains useful information for students and mentors.

This is online here: https://codeyourfuture.github.io/wiki/

## Contribution Guide
The contribution guide can be found in the wiki here:
https://codeyourfuture.github.io/wiki/

## Local Development

Start up a local server

```
cd website
npm install
npm start
```

## Deployment

These docs are re-deployed on every commit to Master using Github Actions

https://github.com/CodeYourFuture/wiki/actions?query=workflow%3A%22Deploy+Docs+Workflow%22

## Manual Deployment

Deploy to https://codeyourfuture.github.io/wiki/

```
cd website
npm install
GIT_USER=ChrisOwen101 CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
```
