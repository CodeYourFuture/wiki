const siteConfig = {
  title: 'CodeYourFuture Scotland',
  tagline: 'Scotland portal',
  url: 'https://codeyourfuture.github.io',
  baseUrl: '/scotland/',
  organizationName: 'codeyourfuture',
  projectName: 'scotland',
  headerLinks: [
    { label: 'Syllabus', doc: 'syllabus' },
    { label: 'Students', doc: 'students' },
    { label: 'Mentors', doc: 'mentors' },
    { label: 'Code of Conduct', page: 'code-of-conduct' },
  ],
  headerIcon: 'img/logo.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#999',
  },
  copyright: `Copyright © ${new Date().getFullYear()} CodeYourFuture`,
  cleanUrl: true,
  docsSideNavCollapsible: false,
  docsUrl: '',
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
};

module.exports = siteConfig;
