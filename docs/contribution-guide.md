---
id: contribution-guide
title: Contribution Guide
---

## Wiki Content

## Markdown

https://guides.github.com/features/mastering-markdown/

## Tools

This website is built using the [Docusaurus](https://docusaurus.io) tool. You can find the documentation for it [here](https://docusaurus.io/docs/en/installation).

## Getting Added to Github Teams

### Code Your Future Teams

We use Github Teams to securely edit and update the Wiki. The broadest level team that you can be a part of it [Mentors](https://github.com/orgs/CodeYourFuture/teams/mentors) but many of the sub-teams will also work.

If you do not have access to edit the wiki please speak to a staff member or volunteer and ask them to add you [the Mentors group](https://github.com/orgs/CodeYourFuture/teams/mentors).

### Other People

If you are not a member of Code Your Future, you are welcome to make a change but we ask that you Fork this repository and open a pull request.

## Editing a Page

At the top of every page in this wiki there is a small `Edit` button. Clicking this button will take you to Github.

When you reach Github you will see a small `Pen` button that looks like this:
![Edit Github](assets/contribution-guide/editgithub.png)

Clicking the `Pen` button will take you to this `Editing Screen`:
![Edit Page Github](assets/contribution-guide/editpagegithub.png)

When you've made your changes, scroll to the bottom of the screen and click the `Commit` button.
![Commit Github](assets/contribution-guide/commit.png)

You changes will then be made public on the Wiki within 1-2 minutes

## Adding a page

To add a page first create a file in the correct folder inside `docs`.

_e.g. If you wanted to add a student guide about Github you would create a file in `docs/students/guides/git.md`_

It is important that the file has this header at the top of it so that the website can find the file.

```
---
id: git
title: An Introduction to Git
---
```

The title is what appears at the top of the page (in a Title Style). The id is used to identify the page in links and the URL.

To make this appear in the Students side bar you must add a line in the `sidebars.json` file.

_e.g. You would add this line in the file_

```
"students": {
    "Tech Guides": [
      "students/guides/making-a-pull-request",
      "students/guides/git",
       ...
```
