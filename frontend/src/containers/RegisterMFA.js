import React, { useEffect, useState } from "react";
import { Content, Wrapper } from "../components/Signup/Signup.styles";
import TorokoboImage from "../images/torokobo.jpg";
import Step1 from "../components/MFARegistration/step1";
import Step2 from "../components/MFARegistration/step2";
import NextPrevious from "../components/NextPrevious";
import Step3 from "../components/MFARegistration/Step3";
import Step4 from "../components/MFARegistration/step4";
import { connect, useSelector } from "react-redux";
import {
   RegisterUserMFA,
   User2FAActivationStart,
   User2FAActivationComplete,
} from "../actions/auth";
import { useNavigate } from "react-router-dom";

const RegisterMFA = ({
   user,
   RegisterUserMFA,
   User2FAActivationStart,
   tokenActivationStart,
   User2FAActivationComplete,
   user2FARegistrationComplete,
}) => {
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();
   const [processTracker, setProcessTracker] = useState(0);
   const [qr, setQR] = useState(false);

   const introduction = {
      Title: "Introduction",
      value: () => <Step1 registerUser={registerUser} loading={loading} />,
   };

   // const [showNext, setShowNext] = useState(true);
   // const [showPrevious, setShowPrev] = useState(false);
   const GetStarted = {
      Title: "Get Started",
      value: () => {
         if (user2FARegistrationComplete && tokenActivationStart) {
            return <Step2 />;
         } else {
            navigate("/error");
         }
      },
   };
   const LinkAccount = {
      Title: "Link Account",
      value: () => (
         <Step3 tokenInfo={tokenActivationStart} qr={qr} setQr={OpenAndClose} />
      ),
   };
   const ConfirmAccount = {
      Title: "Confirm Account",
      value: () => <Step4 loadings={loading} completeMFA={CompleteMFA} />,
   };
   const Process = [introduction, GetStarted, LinkAccount, ConfirmAccount];

   const Next = () => {
      if (processTracker < 3) {
         setProcessTracker(processTracker + 1);
         console.log(processTracker);
      }
   };
   const OpenAndClose = () => {
      setQR(!qr);
   };

   const Prev = () => {
      if (processTracker > 1) {
         setProcessTracker(processTracker - 1);
      }
   };

   const registerUser = async () => {
      console.log(user);
      console.log(user.userId);
      setLoading(true);
      if (user.entrustUser && user.tokenCreated) {
         await User2FAActivationStart(user.userId);
         setLoading(false);
         Next();
      } else {
         await RegisterUserMFA(user.userId);
         console.log(user2FARegistrationComplete);
         await User2FAActivationStart(user.userId);
         setLoading(false);
         setProcessTracker(processTracker + 1);
      }
   };

   const CompleteMFA = async (regCode) => {
      setLoading(true);
      console.log(tokenActivationStart);
      if (tokenActivationStart) {
         await User2FAActivationComplete(
            user.userId,
            regCode,
            tokenActivationStart.serialNumber
         );
         setLoading(false);
         navigate("/validateMFA");
      } else {
         navigate("/error");
      }
   };

   return (
      <Wrapper>
         <Content>
            <div id="profile-picture">
               <img src={TorokoboImage} alt="torokobo img" />
            </div>
            {Process[processTracker].value()}
            <NextPrevious
               processTracker={processTracker}
               next={Next}
               prev={Prev}
            />
         </Content>
      </Wrapper>
   );
};

const mapStateToProps = (state) => ({
   user: state.auth.user,
   user2FARegistrationComplete: state.auth.user2FARegistrationComplete,
   tokenActivationStart: state.auth.tokenActivationStart,
});

export default connect(mapStateToProps, {
   RegisterUserMFA,
   User2FAActivationStart,
   User2FAActivationComplete,
})(RegisterMFA);
