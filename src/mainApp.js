import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class MainApp extends Component {
  constructor(props) {
    super(props);
  }

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
