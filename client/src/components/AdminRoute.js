import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthConsumer, } from "../providers/AuthProvider";

const AdminRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    { auth =>
      <Route
        {...rest}
        render={props => {
          if (auth.authenticated && auth.user.role == 'teacher') {
            return <Component {...props} />
          } else {
            return null
          }
        }}
      />
    }
  </AuthConsumer>
)

export default AdminRoute;
