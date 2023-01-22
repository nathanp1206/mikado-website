import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "./pages/Loading";

import PortalLayout from "./components/PortalLayout";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import { useAuthContext } from "./contexts/Auth";


const Home = loadable(() => import("./pages/home"));
const Menu = loadable(() => import("./pages/menu"));
const Contact = loadable(() => import("./pages/contact-us"));

function PortalRoutes() {
  return (
    <PortalLayout>
      <Switch>
        <UnauthenticatedRoute exact path="/">
          <Home />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/menu">
          <Menu />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/contact-us">
          <Contact />
        </UnauthenticatedRoute>
      </Switch>
    </PortalLayout>
  );
}

export default function Routes() {
  const location = useLocation();
  const { isAuthLoading, user } = useAuthContext();

  useEffect(() => {

  }, []);


  if (isAuthLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route
        path={[
          "/",
          "/menu",
          "/contact-us",
        ]}
        component={PortalRoutes}
      />
      <Route>Not Found</Route>
    </Switch>
  );
}
