import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'
import cert_Electron from '../images/cert_Electron.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="align-center introPara">
            <h2 className=" major">yo...</h2>

            <div id="introIcons">
            <i id="iconLarge" class="fab fa-html5 icon"></i>
            <i id="iconLarge" class="fab fa-css3-alt icon"></i>
            <i id="iconLarge" class="fab fa-js-square icon"></i>
            <i id="iconLarge" class="fab fa-sass icon"></i>
            <i id="iconLarge" class="fab fa-react icon"></i>

            </div>

            <code>Economics graduate turned web developer.</code>
            <code>
              Playing around with Electron and React Native. Working on
              MERNStack for now.
            </code>
            <code>Big fan of chess, Judo and dogs. </code>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://github.com/NikoGham/FFG_BUSINESS-PAGE"
            >
              <img src={pic02} alt="" />
            </a>
          </span>
          <p>
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://www.fullfatgrappling.co.uk/"
            >
              Website for local grappling club.
            </a>
            <ul>
              <li>Unique UI Design</li>
              <li>
                Built with React,React-reveal, React-Scroll, TS-particles,
                React-Bootstrap
              </li>
              <li>Fully Responsive</li>
              <li>
                Email, domain, netlify hosting & form submission configuration.
              </li>
            </ul>
          </p>
          <p>
            Built from a bare bones template. Click on image for github
            readMe.md. Took a while to do both the UI and web development.
            Enjoyed playing around with TS-particles. Loads of cool variations.
            Client wanted a Japanese inspired theme, mixed in with own gold logo
            design.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CV/Education</h2>
          <span className="image main">
            <img src={cert_Electron} alt="" />
          </span>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />

            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input required defaultValue='' type="text" name="contactName" id="contactName" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input required defaultValue='' type="text" name="contactEmail" id="contactEmail" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                required
                name="contactMessage"
                placeholder="How much wood can a woodchucker chuck..."
                defaultValue=''
                id="contactMessage"
                rows="4"
              ></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://www.instagram.com/nikogham.dev/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://www.freecodecamp.org/nikogham"
                className="icon fa-free-code-camp"
              >
                <span className="label">Freecodecamp</span>
              </a>
            </li>

            <li>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://github.com/NikoGham"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                target={'_blank'}
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nick-gillham-3bb6971a1/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
