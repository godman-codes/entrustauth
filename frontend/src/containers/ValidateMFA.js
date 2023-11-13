import React, { useEffect, useState } from "react";
import { Content, Wrapper } from "../components/Signup/Signup.styles";
import TorokoboImage from "../images/torokobo.jpg";
import TokenLabel from "../components/TokenLabel";
import { MFAValidation } from "../actions/auth";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "../components/Snackbar";

const ValidateMFA = ({
   MFAValidation,
   MfaValidationComplete,
   MfaValidationErrorMessage,
   user,
}) => {
   const [loading, setLoading] = useState(false);
   const [showSnackbar, setShowSnackbar] = useState(false);
   const [refresh, setRefresh] = useState(true);
   const [formData, setFormData] = useState({
      token: "",
   });
   const navigate = useNavigate();
   const { token } = formData;
   const onchange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   const userWithToken = {
      ...user, // Assuming userData is your user object
      token: token, // Your token value
   };
   const onSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      //   if (user == null) {
      //      setRefresh(false);
      //   }
      console.log(userWithToken);
      await MFAValidation(userWithToken);
      setLoading(false);
   };
   //    useEffect(() => {}, [refresh]);
   useEffect(() => {
      if (MfaValidationComplete) {
         navigate("/authenticated");
      }
      if (MfaValidationErrorMessage) {
         console.log(MfaValidationErrorMessage);
      }
   }, [MfaValidationComplete, MfaValidationErrorMessage]);

   return (
      <Wrapper>
         <Content>
            {showSnackbar && { MfaValidationErrorMessage } && (
               <Snackbar
                  callback={setShowSnackbar}
                  type={"error"}
                  message={MfaValidationErrorMessage}
               />
            )}
            <div id="profile-picture">
               <img src={TorokoboImage} alt="torokobo img" />
            </div>
            <br />
            <TokenLabel />
            <form onSubmit={(e) => onSubmit(e)}>
               <div className="form-group">
                  <label className="token-label">Token</label>
                  <input
                     type="text"
                     name="token"
                     className="inputs"
                     placeholder="Your Token"
                     value={token}
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
                  {loading ? <div className="loading-spinner"></div> : "Verify"}
               </button>
            </form>
            <div id="login">
               <p>Don't have 2FA enabled ?</p>&nbsp;
               <a href="/login">Login</a>
               {/* {console.log("updated")} */}
            </div>
         </Content>
      </Wrapper>
   );
};

const mapStateToProps = (state) => ({
   MfaValidationComplete: state.auth.MfaValidationComplete,
   MfaValidationErrorMessage: state.auth.MfaValidationErrorMessage,

   user: state.auth.user,
});

export default connect(mapStateToProps, { MFAValidation })(ValidateMFA);
