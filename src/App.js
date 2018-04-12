import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { initActions } from './init';
import { login, logout } from './login'
import MainApp from './mainApp'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    // initialise the UI
    this.props.init();
  }

  handleLogin() {
    this.props.login();
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <BrowserRouter> 
      <Switch>
        <Route
          path="/login"
          component={MainApp}
        />
        {this.props.redirect && <Redirect to ={'/login'}/>}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <button onClick={this.handleLogin}> Log in with civic </button>
        </div>
       </Switch>
      </BrowserRouter>
    );
  }
}

const handleError = error => {
  console.error(error);
};


const mapDispatchToProps = dispatch => ({
  init: () => {
    // this takes all initActions (i.e. actions that must be performed on startup and dispatches them using redux dispatch
    initActions.map(action => dispatch(action).catch(handleError));
  },
  login: () => dispatch(login()),
  logout: () => dispatch(logout())
});

export const mapStateToProps = state => ({
    session: state.login.session,
    redirect: state.login.redirect,
})

App.propTypes = {
  session: PropTypes.shape({
    error: PropTypes.string
  }),
  init: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,

};

// withRouter is required here to ensure the UI gets redrawn on route changes. This may change in future versions of react-router
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

