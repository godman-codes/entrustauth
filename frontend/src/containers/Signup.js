import React, { useEffect, useState } from "react";
import { Content, Wrapper } from "../components/Signup/Signup.styles";
import Snackbar from "../components/Snackbar";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import TorokoboImage from "../images/torokobo.jpg";

const Signup = ({ signup, signupErrorMessage, userSignupCompleted }) => {
   const [showSnackbar, setShowSnackbar] = useState(false);
   const [showPasswordError, setShowPasswordError] = useState(false);
   const [formData, setFormData] = useState({
      email: "",
      name: "",
      password: "",
      re_password: "",
   });
   const navigate = useNavigate();
   const { name, email, password, re_password } = formData;
   const onchange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      if (password === re_password) {
         setShowPasswordError(false);
         signup(name, email, password, re_password);
         console.log(signupErrorMessage);
         console.log(userSignupCompleted);
      } else {
         setShowPasswordError(true);
      }
   };
   useEffect(() => {
      if (userSignupCompleted) {
         navigate("/activate");
      }
      if (signupErrorMessage) {
         setShowSnackbar(true);
      } else {
         setShowSnackbar(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [userSignupCompleted, signupErrorMessage]);

   return (
      <Wrapper>
         <Content>
            {showSnackbar && { signupErrorMessage } && (
               <Snackbar
                  callback={setShowSnackbar}
                  type={"error"}
                  message={signupErrorMessage}
               />
            )}
            <div id="profile-picture">
               <img src={TorokoboImage} alt="torokobo img" />
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
               <div className="form-group">
                  <label>Name</label>
                  <input
                     type="text"
                     name="name"
                     className="inputs"
                     placeholder="Your name"
                     value={name}
                     onChange={(e) => onchange(e)}
                     required
                  />
                  <label>Email</label>
                  <input
                     type="email"
                     name="email"
                     className="inputs"
                     placeholder="Your email address"
                     value={email}
                     onChange={(e) => onchange(e)}
                     required
                  />
                  <label>Contact no</label>
                  <input
                     type="tel"
                     name="phone_number"
                     className="inputs"
                     placeholder="Phone number"
                  />
                  <label>Password</label>
                  <input
                     type="password"
                     name="password"
                     className="inputs"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => onchange(e)}
                     required
                  />
                  <label>Confirm Password</label>
                  {showPasswordError && (
                     <p id="pass-err">password do not match</p>
                  )}
                  <input
                     type="password"
                     name="re_password"
                     className="inputs"
                     placeholder="Confirm Password"
                     value={re_password}
                     onChange={(e) => onchange(e)}
                     required
                  />
                  <p id="terms-conditions">
                     <input type="checkbox" name="" id="check-box" /> I agree to
                     the company's &nbsp;<a href="/signup">Privacy Policies</a>
                     &nbsp;and&nbsp;
                     <a href="/signup"> Terms and Condition </a>
                  </p>
               </div>
               <button type="submit" id="submit-button">
                  Create an account
               </button>
            </form>
            <div id="login">
               <p>Already have an account?</p>&nbsp;
               <a href="/login">Login</a>
               {/* {console.log("updated")} */}
            </div>
         </Content>
      </Wrapper>
   );
};
const mapStateToProps = (state) => ({
   signupErrorMessage: state.auth.signupErrorMessage,
   userSignupCompleted: state.auth.userSignupCompleted,
});
export default connect(mapStateToProps, { signup })(Signup);
