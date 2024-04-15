import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <footer className="footer-l">
        <div className="output-divider">
          <div className="logodefault-parent">
            <div className="logodefault1">
              <div className="data-splitter" />
              <img className="logosaas-icon1" alt="" src="/logosaas-1@2x.png" />
            </div>
            <div className="effortlessly-turn-your">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </div>
          </div>
          <div className="logo-group">
            <img className="socials-icon" alt="" src="/socials.svg" />
            <img className="socials-icon1" alt="" src="/socials-1.svg" />
            <img className="socials-icon2" alt="" src="/socials-2.svg" />
            <img className="socials-icon3" alt="" src="/socials-3.svg" />
            <img className="socials-icon4" alt="" src="/socials-4.svg" />
            <img className="socials-icon5" alt="" src="/socials-5.svg" />
          </div>
        </div>
        <div className="value-comparer">
          <div className="product1">
            <b className="product2">Product</b>
            <div className="features1">Features</div>
            <div className="integrations3">Integrations</div>
            <div className="updates1">Updates</div>
            <div className="faq">FAQ</div>
            <div className="pricing">Pricing</div>
          </div>
          <div className="company">
            <b className="company1">Company</b>
            <div className="about1">About</div>
            <div className="blog">Blog</div>
            <div className="careers">Careers</div>
            <div className="manifesto">Manifesto</div>
            <div className="press">Press</div>
            <div className="contact">Contact</div>
          </div>
          <div className="resources">
            <b className="resources1">Resources</b>
            <div className="examples">Examples</div>
            <div className="community">Community</div>
            <div className="guides">Guides</div>
            <div className="docs">Docs</div>
          </div>
          <div className="security">
            <b className="legal">Legal</b>
            <div className="privacy">Privacy</div>
            <div className="terms">Terms</div>
            <div className="security1">Security</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
