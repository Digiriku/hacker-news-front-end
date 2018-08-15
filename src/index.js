import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Ask from './components/Ask';
import DefaultLayout from './components/DefaultLayout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRoute = () => (
	<BrowserRouter>
		<div className="app">
			<Switch>
				<DefaultLayout exact path="/" component={App} />
				<DefaultLayout exact path="/askstories" component={Ask} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(<AppRoute />, document.getElementById('root'));
registerServiceWorker();
