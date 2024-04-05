// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS file
import CatFacts from './CatFacts';

ReactDOM.render(
  <React.StrictMode>
    <div className="container"> {/* Add a container div */}
      <CatFacts />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
