import "./SignUp.css";

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="collapsible">
        <div className="data-aggregator1">
          <div className="h2-parent1">
            <h1 className="h26">Sign up for free today</h1>
            <div className="body7">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className="buttons-parent">
            <div className="buttons7">
              <button className="get-for-free7">Get for free</button>
            </div>
            <div className="buttons8">
              <div className="get-for-free8">Learn more</div>
              <img className="icons24" alt="" src="/icons-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="emojistar-1-icon"
        loading="lazy"
        alt=""
        src="/emojistar-1@2x.png"
      />
      <img
        className="helix2-1-icon"
        loading="lazy"
        alt=""
        src="/helix2-1@2x.png"
      />
    </section>
  );
};

export default SignUp;
