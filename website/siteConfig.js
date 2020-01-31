const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.example.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Code Your Future Wiki",
  tagline: "",
  url: "https://codeyourfuture.github.io",
  editUrl: "https://github.com/CodeYourFuture/wiki/tree/master/docs/",
  baseUrl: "/wiki/",
  organizationName: "codeyourfuture",
  projectName: "Wiki",
  users: users,
  headerLinks: [
    {
      label: "Syllabus",
      href: "https://codeyourfuture.github.io/syllabus-master/"
    },
    { label: "Students", doc: "students" },
    { label: "Volunteers", doc: "volunteers" },
    { label: "Code of Conduct", page: "code-of-conduct" },
    { search: true }
  ],
  headerIcon: "img/logo.png",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#20232a",
    secondaryColor: "#999"
  },
  copyright: `Copyright © ${new Date().getFullYear()} CodeYourFuture`,
  cleanUrl: true,
  docsSideNavCollapsible: false,
  docsUrl: "",
  highlight: {
    theme: "default"
  },
  onPageNav: "separate"
};

module.exports = siteConfig;
