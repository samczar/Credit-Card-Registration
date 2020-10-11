import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './store/reducer'

let history = createBrowserHistory()
let stores: any
// : Store<CreditCardState, CreditCardAction>

const configureStore = (preloadedState?: any) => {
	const middlewares = [thunk, routerMiddleware(history)].filter(Boolean)

	stores = createStore(
		rootReducer(history),
		preloadedState,
		composeWithDevTools(applyMiddleware(...middlewares))
	)

	return stores
}
let store = configureStore()

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
