import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
   height: var(--maxHeight);
   padding: 0 25px;

   #message {
      padding: 15px;
      color: var(--green);
   }
   #pass-err {
      color: red;
      font-size: small;
   }
   a {
      text-decoration: none;
   }
   #profile-picture {
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
         @media screen and (max-width: 600px) {
            width: 100%;
         }
      }
   }

   .form-group {
      @media screen and (max-width: 600px) {
         padding: 10px;
      }
      .token-label {
         width: 100%;
         font-size: 20px;
         display: flex;
         justify-content: center;
         align-items: center;
      }
   }
   .inputs {
      outline: none;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 30px;
      background: transparent;
      border: none;
      border-bottom: 1px solid var(--black);
      outline: 0cm;
      opacity: 50%;
      margin: 5px 0;
   }
   #submit-button {
      display: flex;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      width: 200px;
      height: 44px;
      background: #229c0e;
      border-radius: 14.8148px;
      align-items: center;
      color: var(--white);
      border-color: transparent;
      border-style: solid;
      :hover {
         opacity: 0.8;
      }
      .loading-spinner {
         top: 20%;
         left: 5%;

         position: relative;
         transform: translate(-50%, -50%);
         border: 4px solid rgba(0, 0, 0, 0.1);
         /* border-top: 4px solid #3498db; */
         border-bottom: 4px solid var(--green) !important;
         border-radius: 50%;
         width: 20px;
         height: 20px;
         animation: spin 2s linear infinite;
         border-color: white;
      }
      @keyframes spin {
         0% {
            transform: translate(-50%, -50%) rotate(0deg);
         }
         100% {
            transform: translate(-50%, -50%) rotate(360deg);
         }
      }
   }
   label {
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 22px;
      width: 61px;
      height: 24px;
   }
   #terms-conditions {
      display: flex;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 24px;
      letter-spacing: -0.408px;
      color: var(--black);
      opacity: 0.5;
      align-items: center;
      a {
         color: #ff0000;
      }
   }
   #check-box {
      width: 12px;
      height: 12px;
      border: 1px solid var(--black);
      border-radius: 10px;
   }
   #login {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-top: 50px;

      p {
         font-weight: 500;
         font-size: 15px;
         line-height: 24px;
         text-align: center;
         letter-spacing: -0.408px;
         color: var(--black);
         opacity: 0.5;
         margin: 0;
      }

      a {
         font-style: normal;
         font-weight: 700;
         font-size: 15px;
         line-height: 24px;
         letter-spacing: -0.408px;
         opacity: 1;
         color: var(--black);
      }
   }
`;
