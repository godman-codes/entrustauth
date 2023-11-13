import { MFAvalidation } from "../actions/auth";
import {
   ACTIVATION_SUCCESS,
   ACTIVATION_FAIL,
   RESEND_ACTIVATION_FAIL,
   RESEND_ACTIVATION_SUCCESS,
   SIGNUP_FAIL,
   SIGNUP_SUCCESS,
   LOGIN_FAIL,
   LOGIN_SUCCESS,
   Entrust_VALIDATION_FAIL,
   Entrust_VALIDATION_SUCCESS,
   USER_2FA_REGISTRATION_SUCCESS,
   USER_2FA_REGISTRATION_FAIL,
   Entrust_TOKEN_ACTIVATION_START_SUCCESS,
   Entrust_TOKEN_ACTIVATION_START_FAIL,
   Entrust_TOKEN_ACTIVATION_COMPLETE_SUCCESS,
   Entrust_TOKEN_ACTIVATION_COMPLETE_FAIL,
} from "../actions/types";
const initialState = {
   userSignupCompleted: null,
   signupErrorMessage: null,
   user: null,
   initialLogin: false,
   initialLoginErrorMessage: null,
   MfaValidationComplete: false,
   MfaValidationErrorMessage: null,
   AuthToken: null,
   user2FARegistrationComplete: false,
   tokenActivationStart: null,
   tokenActivationComplete: false,
   ServerError: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case SIGNUP_SUCCESS:
         return {
            ...state,
            userSignupCompleted: true,
            user: payload,
            signupErrorMessage: null,
         };
      case SIGNUP_FAIL:
         return {
            ...state,
            userSignupCompleted: false,
            signupErrorMessage:
               payload === "Network Error"
                  ? payload
                  : payload.email || payload.name || payload.password,
         };
      case LOGIN_SUCCESS:
         return {
            ...state,
            user: payload,
            initialLogin: true,
         };
      case Entrust_VALIDATION_SUCCESS:
         return {
            ...state,
            MfaValidationComplete: true,
            AuthToken: payload,
            MfaValidationErrorMessage: null,
         };
      case Entrust_TOKEN_ACTIVATION_START_SUCCESS:
         return {
            ...state,
            tokenActivationStart: payload,
         };
      case Entrust_TOKEN_ACTIVATION_START_FAIL:
         return {
            ...state,
            tokenActivationStart: null,
         };
      case Entrust_TOKEN_ACTIVATION_COMPLETE_SUCCESS:
         return {
            ...state,
            tokenActivationComplete: true,
         };
      case Entrust_TOKEN_ACTIVATION_COMPLETE_FAIL:
         return {
            ...state,
            tokenActivationComplete: false,
            ServerError: true,
         };
      case USER_2FA_REGISTRATION_SUCCESS:
         return {
            ...state,
            user2FARegistrationComplete: true,
         };
      case USER_2FA_REGISTRATION_FAIL:
         return {
            ...state,
            user2FARegistrationComplete: false,
            ServerError: true,
         };
      case LOGIN_FAIL:
         return {
            ...state,
            user: null,
            initialLoginErrorMessage: payload,
            initialLogin: false,
         };
      case Entrust_VALIDATION_FAIL:
         return {
            ...state,
            MfaValidationComplete: false,
            AuthToken: null,
            MfaValidationErrorMessage: payload,
         };
      case ACTIVATION_SUCCESS:
      case ACTIVATION_FAIL:
         return {
            ...state,
         };
      default:
         return state;
   }
}
