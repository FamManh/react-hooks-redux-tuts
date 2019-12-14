import React from 'react';
import Layout  from './components/layout/Layout';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
        
      </div>
      
    </Provider>
  );
}

export default App;
