import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Wrapper } from "../components/Signup/Signup.styles";
import TorokoboImage from "../images/torokobo.jpg";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import Snackbar from "../components/Snackbar";

const Login = ({ login, initialLogin, initialLoginErrorMessage, user }) => {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });
   const [loading, setLoading] = useState(false);
   const [showSnackbar, setShowSnackbar] = useState(false);
   const navigate = useNavigate();
   const { email, password } = formData;
   const onchange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const onSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      await login(email, password);
      setLoading(false);
   };
   console.log(user);

   useEffect(() => {
      if (initialLogin) {
         if (user.tokenActivate) {
            navigate("/validateMFA");
         } else {
            navigate("/registerMFASteps");
         }
      }
      console.log(initialLoginErrorMessage);
      if (initialLoginErrorMessage) {
         setShowSnackbar(true);
      } else {
         setShowSnackbar(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [initialLogin, initialLoginErrorMessage]);

   return (
      <Wrapper>
         <Content>
            {showSnackbar && { initialLoginErrorMessage } && (
               <Snackbar
                  callback={setShowSnackbar}
                  type={"error"}
                  message={initialLoginErrorMessage}
               />
            )}
            <div id="profile-picture">
               <img src={TorokoboImage} alt="torokobo img" />
            </div>
            <br />
            <br />
            <form onSubmit={(e) => onSubmit(e)}>
               <div className="form-group">
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

                  <p id="terms-conditions">
                     <input type="checkbox" name="" id="check-box" /> I agree to
                     the company's &nbsp;<a href="/signup">Privacy Policies</a>
                     &nbsp;and&nbsp;
                     <a href="/signup"> Terms and Condition </a>
                  </p>
               </div>
               <button type="submit" id="submit-button">
                  {loading ? <div className="loading-spinner"></div> : "Login"}
               </button>
            </form>
            <div id="login">
               <p>Don't have an account?</p>&nbsp;
               <a href="/signup">SignUp</a>
               {/* {console.log("updated")} */}
            </div>
         </Content>
      </Wrapper>
   );
};
const mapStateToProps = (state) => ({
   initialLogin: state.auth.initialLogin,
   initialLoginErrorMessage: state.auth.initialLoginErrorMessage,
   user: state.auth.user,
});
export default connect(mapStateToProps, { login })(Login); //export default Login;
