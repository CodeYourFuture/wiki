# CodeYourFuture Wiki

This is the CYF Wiki. It contains useful information for students and mentors.

This is online here: https://codeyourfuture.github.io/wiki/

## Getting started

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

## Adding a page

To add a page first create a file in the correct folder inside `docs`.

_e.g. If you wanted to add a student guide about Github you would create a file in `docs/students/guides/git.md`_

It is important that the file has this at the top of it so that the website can find the file

```
---
id: git
title: An Introduction to Git
---
```

To make this appear in the Students side bar you must add a line in the `sidebars.json` file.

_e.g. You would add this line in the file_

```
"students": {
    "Tech Guides": [
      "students/guides/making-a-pull-request",
      "students/guides/git",
       ...
```
