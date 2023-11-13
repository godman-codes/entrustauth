import React from "react";
import { Wrapper } from "./Snackbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const Snackbar = ({ type, callback, message }) => {
   return (
      <Wrapper>
         <div id={type}>
            <FontAwesomeIcon
               icon={faCircleExclamation}
               className="font-awesome"
            />
            &nbsp;
            <p>{message}</p>
            <p id="cancel" onClick={() => callback()}>
               x
            </p>
         </div>
      </Wrapper>
   );
};

export default Snackbar;
