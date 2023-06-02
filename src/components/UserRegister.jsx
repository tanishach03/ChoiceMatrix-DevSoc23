import "./UserRegister.css";
import RegisterImg from "../assets/RegisterImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLock } from "@fortawesome/free-solid-svg-icons";

const UserRegister = () => {
  return (
    <div className="register-container">
      <div className="register-main-content-container">
        <div className="register-text-container">
          <h1>REGISTER</h1>
          <p>Register yourselves to be a part of choicematrix family.</p>
        </div>
        <div className="img-container">
          <img src={RegisterImg} alt="RegisterImg" className="register-img" />
        </div>
      </div>
      <div className="register-form-container">
        <h2>User Registration</h2>
        <form>
          <div className="user-login-form">
            <div className="firstname">
              <label>First Name</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" name="firstname"></input>
              </div>
            </div>
            <div className="lastname">
              <label>Last Name</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" name="lastname"></input>
              </div>
            </div>
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
              <button>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
