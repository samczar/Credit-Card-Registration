import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/actions/store'


let history = createBrowserHistory()


ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App history={history} />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
