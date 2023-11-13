import styled from "styled-components";

export const Wrapper = styled.div`
   border: 1px solid black;
   padding: 10px 5px;
   border-radius: 5px;
   div {
      h2 {
         margin: 9px 0;
         font-size: 17px;
         @media screen and (max-width: 600px) {
            font-size: 15px;
         }
      }
      p {
         margin: 9px 0;
         font-size: 14px;
         @media screen and (max-width: 600px) {
            font-size: 12px;
         }

         line-height: 1.5em;
      }
   }
   .register-btn {
      width: 150px;
      height: 35px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
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
`;
