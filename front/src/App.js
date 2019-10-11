import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import { Provider } from 'react-redux';
import appReducer from "./reducers/awesomeReducer";
import thunk from "redux-thunk";

import HeaderContainer from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SignCourseFormContainer from "./components/Forms/SignCourseForm";
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(appReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <HeaderContainer />
          <Main />
          <Footer />
    
          <SignCourseFormContainer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
