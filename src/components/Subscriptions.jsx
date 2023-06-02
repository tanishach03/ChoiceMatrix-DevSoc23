import { Link } from "react-router-dom";
import SubImg from "../assets/SubImg.png";
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <div className="subscription-main-container">
      <div className="register-main-content-container">
        <div className="register-text-container">
          <h1>YOUR SUBSCRIPTIONS</h1>
          <p>
            Glad you liked our products... We would love to serve you in future
          </p>
        </div>
        <div className="img-container">
          <img src={SubImg} alt="SubImg" className="register-img" />
        </div>
      </div>
      <div className="sub-list-container">
        <Link to="/feedback">
          <div className="sub-item">
            <h4>Product 1</h4>
          </div>
        </Link>
        <div className="sub-item">
          <h4>Product 2</h4>
        </div>
        <div className="sub-item">
          <h4>Product 3</h4>
        </div>
      </div>
      <div className="sub-list-container">
        <div className="sub-item">
          <h4>Product 4</h4>
        </div>
        <div className="sub-item">
          <h4>Product 5</h4>
        </div>
        <div className="sub-item">
          <h4>Product 6</h4>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
