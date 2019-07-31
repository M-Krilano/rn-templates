import {
  FACEBOOK_LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGOUT_SUCCESS
} from "../Actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    case FACEBOOK_LOGOUT_SUCCESS:
      return { token: "" };
    default:
      return state;
  }
}
