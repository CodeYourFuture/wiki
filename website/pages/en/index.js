const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="https://codeyourfuture.github.io/syllabus-master/">
              Syllabus
            </Button>
            <Button href={docUrl("students")}>Students</Button>
            <Button href={docUrl("mentors")}>Volunteers</Button>
          </PromoSection>
          <PromoSection>
            <Button href={docUrl("cities/london/home")}>London</Button>
            <Button href={docUrl("cities/glasgow/home")}>Glasgow</Button>
            <Button href={docUrl("cities/manchester/home")}>Manchester</Button>
            <Button href={docUrl("cities/birmingham/home")}>Birmingham</Button>
            <Button href={docUrl("cities/rome/home")}>Birmingham</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;

    const Description = () => (
      <Container>
        <p>
          CodeYourFuture is a non-profit volunteer-run coding school for
          refugees and asylum seekers. We offer a free nine-month web
          development program with the aim of preparing the students for a job
          as a junior developer. The course contains:
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>
            Front-end development using <a href="https://reactjs.org">React</a>
          </li>
          <li>
            Back-end development using <a href="https://nodejs.org">Node</a>
          </li>
        </ul>
        <p>
          We meet one day a to teach the course, and when arranged we also meet
          outside of this day to help students with homework and projects. An
          important part for us is that people with privilege are meeting to
          help people without.
        </p>
        <p>
          CodeYourFuture currently operates in the follow cities:
          <ul>
            <li>London</li>
            <li>Glasgow</li>
            <li>Manchester</li>
            <li>Birmingham</li>
            <li>Rome</li>
            <li>Medellín</li>
          </ul>
          We are currently looking at expanding to
          <ul>
            <li>Cape Town</li>
          </ul>
        </p>
        <center>
          <i>
            <a href="https://github.com/CodeYourFuture/wiki">
              This website is open source. Click here to make a change.
            </a>
          </i>
        </center>
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
