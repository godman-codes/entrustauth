import styled from "styled-components";

export const Wrapper = styled.div`
   border: 1px solid black;
   padding: 10px 5px;
   border-radius: 5px;
   div {
      h2 {
         font-size: 17px;
         margin: 9px 0;
         @media screen and (max-width: 600px) {
            font-size: 15px;
         }
      }
      p,
      ul {
         margin: 9px 0;
         line-height: 1.5em;
         font-size: 14px;
         @media screen and (max-width: 600px) {
            font-size: 12px;
         }
      }
   }
`;
