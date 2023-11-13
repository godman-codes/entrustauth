import React from "react";
import { Wrapper } from "./step3.styles";
import QRCode from "qrcode.react";

const Step3 = ({ tokenInfo, setQr, qr }) => {
   return (
      <Wrapper>
         {qr ? (
            <div className="qr">
               <QRCode
                  value={tokenInfo.qrCodeUrl}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  size={256}
                  className="code"
               />
               <button className="close" onClick={() => setQr(false)}>
                  Close
               </button>
            </div>
         ) : null}
         <div>
            <h2>Link Your Account</h2>
            <ul>
               <li>
                  Open the Entrust IdentityGuard app on your mobile device.
               </li>
               <li>
                  Choose "Add New Identity or "Add Identity" to initiate the
                  process of adding a new identity
               </li>
               <li>
                  you should see an option to "Scan QR Code" or "Scan QR
                  Barcode." Click or tap on this option.
               </li>
               <li>
                  Use your device's camera to scan the QR code displayed on your
                  screen &nbsp;
                  <button onClick={() => setQr(true)}>
                     click to get QR Code
                  </button>
               </li>
               <li>
                  After successfully scanning the QR code, the app may prompt
                  you to enter a QR code password:{" "}
                  <span>{tokenInfo.qrCodePassword}</span>
               </li>
               <li>
                  When prompted, set the name for the new identity as
                  "Torokobo."
               </li>
            </ul>
         </div>
         <div>
            <h2>Manually</h2>
            <p>
               Enter the following details Serial Number:
               <span>{tokenInfo.serialNumber}</span>, Activation Code:{" "}
               <span>{tokenInfo.activationCode}</span>
            </p>
         </div>
      </Wrapper>
   );
};

export default Step3;
