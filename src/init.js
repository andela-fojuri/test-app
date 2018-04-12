/**
 * Root resource for Redux - exposes the root reducer alongside a list of initialisation actions
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from './login'

export const initActions = [/** no initial actions **/];

export default combineReducers({
  router: routerReducer, // enables interaction between redux and the react-router
  login: reducer
});
