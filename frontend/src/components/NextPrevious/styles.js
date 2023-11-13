import styled from "styled-components";

export const Wrapper = styled.div`
   margin-top: 40px;
   display: flex;
   width: 100%;
   .prev-con,
   .next-con {
      width: 50%;
   }
   .next,
   .prev {
      width: fit-content;
      text-decoration: underline;

      :hover {
         cursor: pointer;
         color: var(--green);
         font-size: larger;
      }
   }
   .next-con {
      display: flex;
      justify-content: flex-end;
   }
`;
