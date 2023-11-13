import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   #success {
      background-color: green;
   }

   #error {
      background-color: red;
   }
   div {
      height: auto;
      margin-top: 10px;
      width: 350px;
      padding-left: 15px;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      position: relative;
      p {
         font-size: 15px;
      }
      .font-awesome {
         font-size: 15px;
         margin-top: 16px;
      }
      #cancel {
         /* display: flex;
         justify-content: center;
         align-items: center; */
         cursor: pointer;
         position: absolute;
         top: -24px;
         right: -13px;
         font-weight: bolder;
         font-size: 15px;
         width: 18px;
         height: 18px;
         border-radius: 50%;
         color: black;
         padding-bottom: 2px;
         background-color: transparent;
      }
   }
`;
