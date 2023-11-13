import React from "react";
import { connect } from "react-redux";

const Authenticated = ({ authData }) => {
   return (
      <div>
         <p>Authenticated</p>
         <p>{authData}</p>
      </div>
   );
};

const mapStateToProps = (state) => ({
   authData: state.auth.authData,
});

export default connect(mapStateToProps)(Authenticated);
