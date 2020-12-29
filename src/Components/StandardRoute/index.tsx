import React from "react";
import NavbarLeft from "../../Components/Drawer/";
import { Redirect, Route, RouteProps, RouteComponentProps } from "react-router-dom";

type RouteComponent = React.ComponentClass<any>

const StandardRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
    if (!Component) {
      return null
    }

    const redirectProps = {
      to: {
        pathname: "/auth/sign-in",
        state: {from: props.location},
      },
    }

    return <Redirect {...redirectProps} />
  }
  // @ts-ignore
  return <Route {...rest} render={renderFn(component)} />
}

export default StandardRoute;