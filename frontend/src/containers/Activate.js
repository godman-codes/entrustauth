import React from "react";
import { Wrapper, Content } from "../components/Signup/Signup.styles";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { verify } from "../actions/auth";
import TorokoboImage from "../images/torokobo.jpg";

const Activate = ({ user, verify }) => {
   const { uid, token } = useParams();
   const onSubmit = (e) => {
      e.preventDefault();
      verify(uid, token);
   };
   const aboutToActivate = () => {
      if (uid && token) {
         return (
            <form onSubmit={(e) => onSubmit(e)}>
               <button type="submit" id="submit-button">
                  Activate Account
               </button>
            </form>
         );
      }
   };

   return (
      <Wrapper>
         <Content>
            <div id="profile-picture">
               <img src={TorokoboImage} alt="torokobo img" />
            </div>
            <br />
            <br />
            <br />
            {aboutToActivate() || (
               <div id="message">
                  <h2>You're Almost Done...</h2>
                  <p>
                     A verification email was sent to your email:
                     {user ? user.email : ""}
                     &nbsp;click the link to activate your account
                  </p>
                  {/* <p>didn't get mail ?</p>
                  <form>
                     <button type="submit" id="submit-button">
                        Resend Activation Mail
                     </button>
                  </form> */}
               </div>
            )}
         </Content>
      </Wrapper>
   );
};
const mapStateToProps = (state) => ({
   user: state.auth.user,
});
export default connect(mapStateToProps, { verify })(Activate);
