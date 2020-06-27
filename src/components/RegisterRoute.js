import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function RegisterRoute({ children, users }) {
  const auth = users.user.data
  return (
    <Route
      render={({ location }) =>
        auth ? (
            <Redirect
            to={{
              pathname: "/account",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
RegisterRoute.propTypes = {
  users: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
};
const mapStateToProps = ({users }) => {
  return {
    users
  };
};
export default connect(mapStateToProps)(RegisterRoute);

