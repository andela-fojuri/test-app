

import { handleErrors } from './common'
import { config } from './config'
import LoginService from "civic-login-redux";

export const loginService = new LoginService(config)

loginService.apiProcessLogin = function(authToken) {
  return dispatch => fetch(`${config.endpoint}`, {
      body: JSON.stringify({ authToken }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(body => dispatch(loginService.apiLoginSuccess(body.sessionToken)));
}