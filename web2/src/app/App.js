import React, { Component } from 'react';
import AppContent from "./appContent/AppContent";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
