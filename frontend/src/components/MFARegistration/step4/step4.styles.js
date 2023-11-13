import styled from "styled-components";

export const Wrapper = styled.div`
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
`;
