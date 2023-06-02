import "./EmpRegister.css";
import RegisterImg from "../assets/RegisterImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const EmpRegister = () => {
    const initialCred = {empId: '', password: ''};
    const [empCredential, setEmpCredential] = useState(initialCred);
  const credentialGenerator = (event) => {
    event.preventDefault();
    const password = Math.random().toString(36).slice(2, 10);
    const randEmpId = 'EMP';
    const empId = randEmpId.concat(Math.random().toString(36).slice(2, 10)) 
    const empCredential = {empId, password};
    setEmpCredential(empCredential);
  };
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
        <h2>Employee Registration</h2>
        <form>
          <div className="user-login-form">
            <div className="firstname">
              <label>First Name</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" name="firstname" required></input>
              </div>
            </div>
            <div className="lastname">
              <label>Last Name</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" name="lastname" required></input>
              </div>
            </div>
            <div className="userId">
              <label>Department</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faBriefcase} />
                <input type="email" name="userid" required></input>
              </div>
            </div>
            <div className="password">
              <label>Phone Number</label>
              <div className="inputDiv">
                <FontAwesomeIcon icon={faPhone} />
                <input type="text" name="userpassword" required></input>
              </div>
            </div>
            <div className="login-btn">
              <button onClick={credentialGenerator}>Register</button>
            </div>
          </div>
        </form>
      </div>
      <div className="generated-credentials">
        <div className="generated-empid">
          <label>Generated Employee ID</label>
          <div className="inputDiv">
            <input
              type="text"
              name="lastname"
              disabled="true"
              placeholder={empCredential.empId}
            ></input>
          </div>
        </div>
        <div className="generated-password">
          <label>Generated Password</label>
          <div className="inputDiv">
            <input
              type="text"
              name="lastname"
              disabled="true"
              placeholder={empCredential.password}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpRegister;
