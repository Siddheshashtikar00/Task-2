import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="bar-parent">
      <div className="bar">
        <div className="this-page-is-included-in-a-fre-parent">
          <div className="this-page-is">
            This page is included in a free SaaS Website Kit.
          </div>
          <div className="view-the-complete-kit-parent">
            <div className="view-the-complete">View the complete Kit</div>
            <img className="icons" loading="lazy" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <header className="nav-bar-desktop">
        <div className="logo">
          <div className="logodefault">
            <div className="logodefault-child" />
            <img
              className="logosaas-icon"
              loading="lazy"
              alt=""
              src="/logosaas@2x.png"
            />
          </div>
          <div className="made-by">made by</div>
          <img
            className="black-horizontal-1-icon"
            loading="lazy"
            alt=""
            src="/blackhorizontal-1.svg"
          />
        </div>
        <div className="stack">
        <button className="cust">About</button>
          <button className="cust">Features</button>
         <button className="cust">Customers</button>
         <button className="cust">Updates</button>
         <button className="cust">Help</button>
         
          
          
        </div>
        <button className="ok">Get for free</button>
      </header>
    </section>
  );
};

export default FrameComponent2;
