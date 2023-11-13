import {
   ACTIVATION_FAIL,
   ACTIVATION_SUCCESS,
   LOGIN_FAIL,
   LOGIN_SUCCESS,
   RESEND_ACTIVATION_FAIL,
   RESEND_ACTIVATION_SUCCESS,
   SIGNUP_FAIL,
   SIGNUP_SUCCESS,
   Entrust_VALIDATION_FAIL,
   Entrust_VALIDATION_SUCCESS,
   USER_2FA_REGISTRATION_SUCCESS,
   USER_2FA_REGISTRATION_FAIL,
   Entrust_TOKEN_ACTIVATION_START_SUCCESS,
   Entrust_TOKEN_ACTIVATION_START_FAIL,
   Entrust_TOKEN_ACTIVATION_COMPLETE_SUCCESS,
   Entrust_TOKEN_ACTIVATION_COMPLETE_FAIL,
} from "./types";
import axios from "axios";

export const signup =
   (name, email, password, re_password) => async (dispatch) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const body = JSON.stringify({ email, name, password, re_password });
      // console.log(body);
      try {
         await axios
            .post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config)
            .then((response) => {
               // response.json();
               console.log(response);
               dispatch({
                  type: SIGNUP_SUCCESS,
                  payload: response.data,
               });
            })
            .catch((error) => {
               console.log(error.message);
               if (error.message) {
                  dispatch({
                     type: SIGNUP_FAIL,
                     payload: error.message,
                  });
               }
               dispatch({
                  type: SIGNUP_FAIL,
                  payload: error.response.data,
               });
            });
      } catch (err) {
         console.log("this is the error: " + err);
         dispatch({ type: SIGNUP_FAIL });
         throw err;
      }
   };

export const login = (email, password) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   const body = JSON.stringify({ email, password });
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_API_URL}/authentication/login`,
         body,
         config
      );
      dispatch({
         type: LOGIN_SUCCESS,
         payload: res.data,
      });
      console.log(res);
   } catch (err) {
      dispatch({
         type: LOGIN_FAIL,
         payload: err.response.data.Message,
      });
      console.log(err.response.data.Message);
   }
};
export const MFAValidation = (userData) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   console.log({ userData });
   const body = userData;
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_API_URL}/authentication/Validate`,
         body,
         config
      );
      dispatch({
         type: Entrust_VALIDATION_SUCCESS,
         payload: res.data,
      });
      console.log(res);
   } catch (err) {
      dispatch({
         type: Entrust_VALIDATION_FAIL,
         payload: err.response.data.Message,
      });
      console.log(err);
      console.log(err.response.data.Message);
   }
};
export const RegisterUserMFA = (userId) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   console.log(userId);
   const body = JSON.stringify({ userId });
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_API_URL}/authentication/CreateEntrustUser`,
         body,
         config
      );
      dispatch({
         type: USER_2FA_REGISTRATION_SUCCESS,
         payload: "SUCCESS",
      });
      console.log(res);
   } catch (err) {
      dispatch({
         type: USER_2FA_REGISTRATION_FAIL,
         payload: err.response.data.Message,
      });
      console.log(err);
   }
};

export const User2FAActivationStart = (userId) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   console.log(userId);
   const body = JSON.stringify({ userId });
   try {
      const res = await axios.post(
         `${process.env.REACT_APP_API_URL}/authentication/TokenActivationStart`,
         body,
         config
      );
      dispatch({
         type: Entrust_TOKEN_ACTIVATION_START_SUCCESS,
         payload: res.data,
      });
      console.log(res);
   } catch (err) {
      dispatch({
         type: Entrust_TOKEN_ACTIVATION_START_FAIL,
         payload: err.response.data.Message,
      });
      console.log(err);
   }
};

export const User2FAActivationComplete =
   (userId, registrationCode, serialNumber) => async (dispatch) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const body = JSON.stringify({ userId, registrationCode, serialNumber });
      try {
         const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/authentication/TokenActivationComplete`,
            body,
            config
         );
         dispatch({
            type: Entrust_TOKEN_ACTIVATION_COMPLETE_SUCCESS,
            payload: res.data,
         });
         console.log(res);
      } catch (err) {
         dispatch({
            type: Entrust_TOKEN_ACTIVATION_COMPLETE_FAIL,
            payload: err.response.data.Message,
         });
         console.log(err);
      }
   };

export const verify = (uid, token) => async (dispatch) => {
   const config = {
      headers: {
         "Content-Type": "application/json",
      },
   };
   const body = JSON.stringify({ uid, token });
   try {
      await axios.post(
         `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
         body,
         config
      );
      dispatch({
         type: ACTIVATION_SUCCESS,
      });
   } catch (err) {
      dispatch({
         type: ACTIVATION_FAIL,
      });
   }
};
