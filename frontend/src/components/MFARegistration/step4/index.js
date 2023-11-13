import React, { useState } from "react";
import { Wrapper } from "./step4.styles";

const Step4 = ({ loadings, completeMFA }) => {
   const [formData, setFormData] = useState({
      RegCode: "",
   });
   const onchange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const { RegCode } = formData;
   const onSubmit = async (e) => {
      e.preventDefault();
      await completeMFA(RegCode);
   };
   return (
      <Wrapper>
         <div>
            <h2>Complete Identity Activation</h2>
            <p>Kindly submit the registration code on your app</p>
            <form onSubmit={(e) => onSubmit(e)}>
               <div className="form-group">
                  <label>Registration Code</label>
                  <input
                     type="text"
                     name="RegCode"
                     className="inputs"
                     placeholder="Enter Registration Code"
                     value={RegCode}
                     onChange={(e) => onchange(e)}
                     required
                  />
               </div>
               <button type="submit" id="submit-button">
                  {loadings ? (
                     <div className="loading-spinner"></div>
                  ) : (
                     "Confirm"
                  )}
               </button>
            </form>
         </div>
      </Wrapper>
   );
};

export default Step4;
