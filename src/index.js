import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';

const theme = {
  baseUnit: '8px',
  colors: {
    main: '#ff6500',
    dark: '#A34100',
    light: '#FFB17D'
  }

}

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
