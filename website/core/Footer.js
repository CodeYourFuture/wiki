const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div className="wrapper">
          <section className="sitemap">
            <h5>CodeYourFuture</h5>
            <nav>
              <ul>
                <li>
                  <a
                    href="https://codeyourfuture.io"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CodeYourFuture"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/CodeYourFuture_"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/codeyourfuture.io"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Facebook
                  </a>
                </li>
                <i>
                  <a href="https://github.com/CodeYourFuture/wiki">
                    This website is open source. Click here to make a change.
                  </a>
                </i>
              </ul>
            </nav>
          </section>
          <section className="copyright">{this.props.config.copyright}</section>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
