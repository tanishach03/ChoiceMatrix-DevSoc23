import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import HeroImg from "../assets/HeroImg.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="main-content-container">
        <div className="text-container">
          <h1>THINK AHEAD</h1>
          <h1>AND</h1>
          <h1>SCALE RESULTS</h1>
          <p>
            An approach that uses performance-based weighted voting mechanism.
            Our goal is to improve decision-making by adjusting vote weights
            based on how well the organization is doing
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="HeroImg" className="hero-img" />
        </div>
      </div>
      <div className="login-container">
        <div className="user-login">
          <h2>User Login</h2>
          <form>
            <div className="user-login-form">
              <div className="userId">
                <label>Email ID</label>
                <div className="inputDiv">
                  <FontAwesomeIcon icon={faAt} />
                  <input type="email" name="userid"></input>
                </div>
              </div>
              <div className="password">
                <label>Password</label>
                <div className="inputDiv">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" name="userpassword"></input>
                </div>
              </div>
              <div className="login-btn">
                <div onClick={scrollToTop}>
                  <Link to="/subscriptions">
                    <button>Login</button>
                  </Link>
                </div>
                <div onClick={scrollToTop}>
                  <Link to="/userregister">
                    <button>Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="emp-login">
          <h2>Employee Login</h2>
          <form>
            <div className="emp-login-form">
              <div className="empId">
                <label>Employee ID</label>
                <div className="inputDiv">
                  <FontAwesomeIcon icon={faUser} />
                  <input type="text" name="empid"></input>
                </div>
              </div>
              <div className="password">
                <label>Password</label>
                <div className="inputDiv">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" name="emppassword"></input>
                </div>
              </div>
              <div className="login-btn">
                <div onClick={scrollToTop}>
                  <Link to="/projects">
                    <button>Login</button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Landing;
