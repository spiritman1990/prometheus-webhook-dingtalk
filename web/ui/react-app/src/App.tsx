import React from 'react';
import Navigation from './Navbar';
import {Container} from 'reactstrap';
import {Redirect, Router} from "@reach/router";
import {Config, Flags, Status} from "./pages";
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navigation/>
      <Container fluid style={{paddingTop: 70}}>
        <Router basepath="/ui">
          <Redirect from="/" to="/ui/config"/>

          {/*
            NOTE: Any route added here needs to also be added to the list of
            React-handled router paths ("reactRouterPaths") in /web/web.go.
          */}
          <Config path="/config"/>
          <Flags path="/flags"/>
          <Status path="/status"/>
        </Router>
      </Container>
    </>
  );
};

export default App;
