import React from "react";
import { Wrapper } from "./styles";

const NextPrevious = ({ processTracker, next, prev }) => {
   return (
      <Wrapper>
         <div className="prev-con">
            {processTracker > 1 ? (
               <div onClick={() => prev()} className="prev">
                  Previous
               </div>
            ) : null}
         </div>
         <div className="next-con">
            {processTracker < 3 && processTracker > 0 ? (
               <div className="next" onClick={() => next()}>
                  Next
               </div>
            ) : null}
         </div>
      </Wrapper>
   );
};

export default NextPrevious;
