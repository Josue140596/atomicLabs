import React from 'react';
import ReactDOM from 'react-dom';

import { AtomicsLab } from './AtomicsLab';


//Aplicacion de styles por SASS
import './styles/styles.scss';


ReactDOM.render(
  <React.StrictMode>
    <AtomicsLab/>
  </React.StrictMode>,
  document.getElementById('root')
);

