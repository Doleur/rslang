import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './footer/footer.component';
import MainPage from './mainPage/mainPage.component';
import Textbook from './textbook/textbook.component';
import Header from './Header';
import Menu from './menu';
import AudioCall from './game-audio-call';

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
