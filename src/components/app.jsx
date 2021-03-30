import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './Footer';
import AudioCall from './game-audio-call';
import Header from './Header';
import MainPage from './MainPage';
import Menu from './menu';
import Textbook from './Textbook';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <Route path="/" render={() => <MainPage />} exact />
        <Route
          path="/textbook/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <Textbook id={id} />;
          }}
        />
        <Route path="/game" render={() => <AudioCall />} />
        <Footer />
      </Router>
    </>
  );
};

export default App;
