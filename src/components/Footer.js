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
           <a href="#" className="kz"> <b className="product2">Product</b></a>
           <a href="#" className="kz"> <div className="features1">Features</div></a>
           <a href="#" className="kz"> <div className="integrations3">Integrations</div></a>
           <a href="#" className="kz"> <div className="updates1">Updates</div></a>
           <a href="#" className="kz"> <div className="faq">FAQ</div></a>
           <a href="#" className="kz"> <div className="pricing">Pricing</div></a>
          </div>
          <div className="company">
          <a href="#" className="kz"> <b className="company1">Company</b></a>
          <a href="#" className="kz"> <div className="blog">Blog</div></a>
          <a href="#" className="kz"> <div className="careers">Careers</div></a>
          <a href="#" className="kz"> <div className="manifesto">Manifesto</div></a>
          <a href="#" className="kz"> <div className="press">Press</div></a>
          <a href="#" className="kz"> <div className="contact">Contact</div></a>
          </div>
          <div className="resources">
          <a href="#" className="kz">  <b className="resources1">Resources</b></a>
            <a href="#" className="kz">  <div className="examples">Examples</div></a>
            <a href="#" className="kz"> <div className="community">Community</div></a>
            <a href="#" className="kz"><div className="guides">Guides</div></a>
            <a href="#" className="kz"> <div className="guides">Guides</div></a>
            <a href="#" className="kz"> <div className="docs">Docs</div></a>
          </div>
          <div className="security">
          <a href="#" className="kz"> <b className="legal">Legal</b></a>
          <a href="#" className="kz"> <div className="privacy">Privacy</div></a>
          <a href="#" className="kz"> <div className="terms">Terms</div></a>
          <a href="#" className="kz"> <div className="security1">Security</div></a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
