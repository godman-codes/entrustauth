import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import { GlobalStyle } from "./GlobalStyles";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./containers/Login";
import ValidateMFA from "./containers/ValidateMFA";
import RegisterMFA from "./containers/RegisterMFA";
import Authenticated from "./containers/Authenticated";
import Error from "./containers/Error";

const App = () => (
   <Provider store={store}>
      <Router>
         <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/activate/:uid/:token" element={<Activate />} />
            <Route exact path="/activate" element={<Activate />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/validateMFA" element={<ValidateMFA />} />
            <Route exact path="/registerMFASteps" element={<RegisterMFA />} />
            <Route exact path="/authenticated" element={<Authenticated />} />
            <Route exact path="/error" element={<Error />} />
         </Routes>
         <GlobalStyle />
      </Router>
   </Provider>
);

export default App;
