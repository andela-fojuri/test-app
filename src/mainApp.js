import React, { Component } from 'react';
import { connect } from 'react-redux';


class MainApp extends Component {

  render() {
    return (
      <div>
        Welcome, Your token is {this.props.session.token}
    </div>
    )
  }
}

const mapDispatchToProps = () => ({
});

export const mapStateToProps = state => ({
    session: state.login.session,
})

export default connect(mapStateToProps, mapDispatchToProps)(MainApp) ;
