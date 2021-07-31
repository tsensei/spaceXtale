import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DataContext } from "./providers/DataContext";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import Footer from "./components/Footer";
import Starlink from "./components/Starlink";
import Rockets from "./components/Rockets";
import Rocket from "./components/Rocket";

const App = () => {
  const data = useContext(DataContext);

  if (
    !data.launchesPast ||
    !data.launchesUpcoming ||
    !data.rockets ||
    !data.starman ||
    !data.starlinkLength
  ) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/launches">
          <Launches />
        </Route>
        <Route path="/launch/:id">
          <Launch />
        </Route>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route path="/rocket/:id">
          <Rocket />
        </Route>
        <Route exact path="/starlink">
          <Starlink />
        </Route>
        <Route exact path="/roadster">
          <h1>Roadster</h1>
        </Route>
        <Route>
          <h1>Unknown Endpoint</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
