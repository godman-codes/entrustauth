import React from "react";
import { Wrapper } from "./step1.styles";

const Step1 = ({ registerUser, loading }) => {
   return (
      <Wrapper>
         <div>
            <h2>Introduction</h2>
            <p>
               Welcome to the enhanced security world of Two-Factor
               Authentication (2FA). 2FA adds an extra layer of protection to
               your account, ensuring that only you can access your sensitive
               information. We've chosen the Entrust IdentityGuard
               Authentication app to make your login process safer and more
               secure.
            </p>
         </div>
         <div>
            <h2>What is 2FA?</h2>
            <p>
               Two-Factor Authentication (2FA) is a security method that
               requires you to provide two different authentication factors to
               access your account. These factors typically include something
               you know (like a password) and something you have (like a mobile
               app).
            </p>
         </div>
         <div>
            <h2>About Entrust IdentityGuard</h2>
            <p>
               The Entrust IdentityGuard Authentication app is a trusted
               solution for 2FA. It adds an additional layer of protection to
               your account by generating one-time codes that only you can use
               to log in.
            </p>
         </div>
         <div>
            <p>click register to start</p>
            <button
               className="register-btn"
               type="button"
               onClick={() => registerUser()}
            >
               {loading ? <div className="loading-spinner"></div> : "Register"}
            </button>
         </div>
      </Wrapper>
   );
};

export default Step1;
