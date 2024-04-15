import FrameComponent2 from "../components/FrameComponent2";
import GroupComponent from "../components/GroupComponent";
import LogoTicker from "../components/LogoTicker";
import Product from "../components/Product";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import SizeAdjustor from "../components/SizeAdjustor";
import Compressor from "../components/Compressor";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <FrameComponent2 />
      <GroupComponent />
      <LogoTicker />
      <Product />
      <FrameComponent1 />
      <FrameComponent />
      <section className="data-processor">
        <div className="shape-container">
          <div className="tag-wrapper">
            <div className="tag">
              <div className="version-20-is">Testimonials</div>
            </div>
          </div>
          <h1 className="h2">What our users say</h1>
        </div>
      </section>
      <section className="fill-provider">
        <SizeAdjustor />
        <Compressor />
        <div className="label-maker" />
      </section>
      <SignUp />
      <Footer />
    </div>
  );
};

export default Desktop;
