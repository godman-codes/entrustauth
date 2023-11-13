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
      p,
      ul {
         margin: 9px 0;
         font-size: 14px;
         @media screen and (max-width: 600px) {
            font-size: 12px;
         }
      }
      ul {
         line-height: 1.5em;
      }
   }
   span {
      font-weight: bolder;
   }
   .qr {
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
   }
   .code {
      width: 300px !important;
      height: 300px !important;
   }
   .close {
      margin-top: 30px;
      border-radius: 5px;
      :hover {
         cursor: pointer;
      }
   }
`;
