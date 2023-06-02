import { Button } from "@mui/material";
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
        <form name="feedback-form">
        <h2>PRODUCT 1</h2>
        <div className="feedback-rating-container">
          <div className="rating-heading">
            <p>Bad</p>
            <p className="fair-text">Fair</p>
            <p className="average-text">Average</p>
            <p className="good-text">Good</p>
            <p>Excellent</p>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>User Experience and Visuals</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="UX" value="bad" />
              <input type="radio" name="UX" value="fair" />
              <input type="radio" name="UX" value="average" />
              <input type="radio" name="UX" value="good" className="good-radio"/>
              <input type="radio" name="UX" value="excellent" className="excellent-radio"/>
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
              <input type="radio" name="pricing" value="good" className="good-radio"/>
              <input type="radio" name="pricing" value="excellent"  className="excellent-radio"/>
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Performance / Reliability</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="performance" value="bad" />
              <input type="radio" name="performance" value="fair" />
              <input type="radio" name="performance" value="average" />
              <input type="radio" name="performance" value="good" className="good-radio"/>
              <input type="radio" name="performance" value="excellent" className="excellent-radio"/>
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Customer Support</h4>
            </div>
            <div className="rating-data">
              <input type="radio" name="support" value="bad" />
              <input type="radio" name="support" value="fair" />
              <input type="radio" name="support" value="average" />
              <input type="radio" name="support" value="good" className="good-radio"/>
              <input type="radio" name="support" value="excellent" className="excellent-radio"/>
            </div>
          </div>
          <div className="UX-visuals">
            <div className="rating-head">
              <h4>Suggestions (if any)</h4>
            </div>
            <div className="suggestion-text rating-data">
                <input type="text" name="suggestion-text"/>
            </div>
          </div>
        </div>
        <Button variant="contained" sx={{backgroundColor:"#F775B6", ":hover": {backgroundColor: '#F775B6'},}}>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
