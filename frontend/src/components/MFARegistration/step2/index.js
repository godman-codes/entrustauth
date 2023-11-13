import React from "react";
import { Wrapper } from "./step2.styles";

const Step2 = () => {
   return (
      <Wrapper>
         <div>
            <h2>Getting Started</h2>
            <p>
               Follow these simple steps to register for 2FA with the Entrust
               IdentityGuard Authentication app:
            </p>
         </div>
         <div>
            <h2>Download the App</h2>
            <ul>
               <li>
                  Visit your app store (Google Play or Apple App Store) on your
                  mobile device.
               </li>
               <li>
                  <a
                     href="https://play.google.com/store/apps/details?id=com.entrust.identityGuard.mobile"
                     target="_blank"
                     rel="noopener noreferrer"
                     about="Entrust Android APP"
                     title="Download Entrust App"
                  >
                     Download Entrust APP for Android
                  </a>
               </li>
               <li>
                  <a
                     href="https://apps.apple.com/us/app/entrust-identityguard-mobile/id384717687"
                     target="_blank"
                     rel="noopener noreferrer"
                     about="Entrust Apple APP"
                     title="Download Entrust App"
                  >
                     Download Entrust APP for IOS
                  </a>
               </li>
               <li>Search for "Entrust IdentityGuard" and download the app.</li>
            </ul>
         </div>
         <div>
            <h2>Initial Setup</h2>
            <p>Open the app and follow the initial setup instructions.</p>
         </div>
      </Wrapper>
   );
};

export default Step2;
