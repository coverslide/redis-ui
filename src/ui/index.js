'use strict';

import React from 'react';
import { render } from 'react-dom';

const b = document.createElement('div');
document.body.appendChild(b);

function Main () {
  return (
    <h1>Test</h1>
  )
}

render(<Main />, b);
