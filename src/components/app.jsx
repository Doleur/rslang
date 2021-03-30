import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './Footer';
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
          path="/textbook/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <Textbook id={id} />;
          }}
        />
        <Footer />
      </Router>
    </>
  );
};

export default App;
