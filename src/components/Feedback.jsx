import FeedbackImg from "../assets/FeedbackImg.png";
import "./Feedback.css";

const Feedback = () => {
  return (
    <>
      <div className="register-main-content-container">
        <div className="feedback-text-container">
          <h1>FEEDBACK</h1>
          <p>
            We would love to hear from you about our product and try to .......
          </p>
        </div>
        <div className="img-container">
          <img src={FeedbackImg} alt="FeedbackImg" className="register-img" />
        </div>
      </div>
      <div className="feedback-container">
        <h2>PRODUCT 1</h2>
        <div className="feedback-rating-container">
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>User Experience and Visuals</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="UX" value="bad" />
              <input type="radio" name="UX" value="fair" />
              <input type="radio" name="UX" value="average" />
              <input type="radio" name="UX" value="good" />
              <input type="radio" name="UX" value="excellent" />
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Pricing and Affordability</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="pricing" value="bad" />
              <input type="radio" name="pricing" value="fair" />
              <input type="radio" name="pricing" value="average" />
              <input type="radio" name="pricing" value="good" />
              <input type="radio" name="pricing" value="excellent" />
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Performance / Reliability</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="UX" value="bad" />
              <input type="radio" name="UX" value="fair" />
              <input type="radio" name="UX" value="average" />
              <input type="radio" name="UX" value="good" />
              <input type="radio" name="UX" value="excellent" />
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Customer Support</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="UX" value="bad" />
              <input type="radio" name="UX" value="fair" />
              <input type="radio" name="UX" value="average" />
              <input type="radio" name="UX" value="good" />
              <input type="radio" name="UX" value="excellent" />
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Suggestions (if any)</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="UX" value="bad" />
              <input type="radio" name="UX" value="fair" />
              <input type="radio" name="UX" value="average" />
              <input type="radio" name="UX" value="good" />
              <input type="radio" name="UX" value="excellent" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
