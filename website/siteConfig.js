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
  url: "https://codeyourfuture.github.io",
  editUrl: "https://github.com/CodeYourFuture/docs/tree/master/docs/",
  baseUrl: "/docs/",
  organizationName: "codeyourfuture",
  projectName: "Docs",
  users: users,
  headerLinks: [
    {
      label: "Syllabus",
      href: "https://codeyourfuture.github.io/syllabus-master/"
    },
    { label: "Students", doc: "students" },
    { label: "Volunteers", doc: "mentors" },
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
