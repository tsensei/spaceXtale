import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DataContext } from "./providers/DataContext";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

const App = () => {
  const data = useContext(DataContext);

  if (!data.launchesPast || !data.launchesUpcoming || !data.rockets) {
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
          <h1>Launches</h1>
        </Route>
        <Route path="/launch/:id">
          <h1>Specific Launch</h1>
        </Route>
        <Route exact path="/rockets">
          <h1>Rockets</h1>
        </Route>
        <Route path="/rocket/:id">
          <h1>Specific Rocket</h1>
        </Route>
        <Route exact path="/starlink">
          <h1>Starlink</h1>
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
