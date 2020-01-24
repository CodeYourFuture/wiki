const siteConfig = {
  title: "CodeYourFuture Wiki",
  tagline: "",
  url: "https://codeyourfuture.github.io",
  baseUrl: "/wiki/",
  organizationName: "codeyourfuture",
  projectName: "Wiki",
  headerLinks: [
    { label: "Students", doc: "students" },
    { label: "Mentors", doc: "mentors" },
    { label: "Code of Conduct", page: "code-of-conduct" }
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
