import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './Footer';
import GroupWordsPage from './GroupWordsPage';
import Header from './Header';
import MainPage from './MainPage';
import Textbook from './Textbook';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" render={() => <MainPage />} exact />
        <Route
          path="/textbook"
          render={() => {
            return <Textbook />;
          }}
          exact
        />
        <Route
          path="/textbook/group/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <GroupWordsPage groupId={id} />;
          }}
        />

        <Footer />
      </Router>
    </>
  );
};

export default App;
