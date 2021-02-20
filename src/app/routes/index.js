import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Loadable from "react-loadable";
import Loader from '../components/loader/index';
import {PageAcceuil as Acceuil} from '../container/page-acceuil/index'

const PageAcceuil = Loadable({
  loader: () => import("../container/page-acceuil/index"),
  loading: <Loader />,
  modules: ["pageacceuil"]
});

const Routes = () => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to={`/acceuil`} />
        {/* <PageCommonWrapper exact path="/acceuil" component={PageAcceuil} /> */}
        <Route
          render={props => (
            <>
              <Acceuil />
            </>
          )}
        />
      </Switch>
    </>
  );
};

export default Routes;