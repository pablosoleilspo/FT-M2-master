import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { BrowserRouter as PepeBrowser } from "react-router-dom";

ReactDOM.render(
  <PepeBrowser>
    <App />
  </PepeBrowser>,
  document.getElementById('root')
);
