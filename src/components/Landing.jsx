import "./Landing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="login-container">
      <div className="user-login">
        <h3>User Login</h3>
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
          </div>
        </form>
      </div>
      <div className="emp-login">
        <h3>Employee Login</h3>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
