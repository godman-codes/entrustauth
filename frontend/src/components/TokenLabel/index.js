import React from "react";
import { Wrapper } from "./TokenLable.styles";
import OTP from "../../images/otp-icon.png";

const TokenLabel = () => {
   return (
      <Wrapper>
         <h4>Two-Step Verification</h4>
         <p>
            <img src={OTP} alt="OTP" />
         </p>
         <p>Enter the Token on Entrust Authentication APP</p>
      </Wrapper>
   );
};

export default TokenLabel;
