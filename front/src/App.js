import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from "./reducers/awesomeReducer";

import HeaderContainer from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const store = createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
