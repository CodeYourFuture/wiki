const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.example.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Code Your Future Docs",
  tagline: "",
  url: "https://docs.codeyourfuture.io",
  editUrl: "https://github.com/CodeYourFuture/wiki/tree/master/docs/",
  baseUrl: "/",
  organizationName: "codeyourfuture",
  projectName: "Wiki",
  users: users,
  headerLinks: [
    {
      label: "Syllabus",
      href: "https://syllabus.codeyourfuture.io"
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
  docsSideNavCollapsible: true,
  docsUrl: "",
  highlight: {
    theme: "default"
  },
  onPageNav: "separate"
};

module.exports = siteConfig;
