'use strict';

import "./vendors";
import "./scripts/load-css";

import React from 'react';
import { render } from 'react-dom';



function Main () {
  return (
    <h1>Test</h1>
  )
}

render(<Main />, document.getElementById('main'));
