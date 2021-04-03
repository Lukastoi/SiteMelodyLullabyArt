import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import PageLoader from '../components/loader/index';
// import {PageAcceuil as Acceuil} from '../container/page-acceuil/index'
import PageAcceuil from "../container/page-acceuil/index";
import PageAbout from "../container/page-about/index";
import PageGalerie from "../container/page-galerie/index";

// const PageAcceuil = Loadable({
//   loader: () => import("../container/page-acceuil/index"),
//   loading: <PageLoader />
// });

// const PageAbout = Loadable({
//   loader: () => import("../container/page-about/index"),
//   loading: <PageLoader />
// });

const Routes = () => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to={`/acceuil`} />
        {/* <PageCommonWrapper exact path="/acceuil" component={PageAcceuil} /> */}
        <Route
          exact
          path="/acceuil"
          component={PageAcceuil}
        />
        <Route
          exact
          path="/about"
          component={PageAbout}
        />
        <Route
          exact
          path="/galerie"
          component={PageGalerie}
        />
      </Switch>
    </>
  );
};

export default Routes;