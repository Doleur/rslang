import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './header/header.component';
import Footer from './footer/footer.component';
import MainPage from './mainPage/mainPage.component';
import Textbook from './textbook/textbook.component';

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
