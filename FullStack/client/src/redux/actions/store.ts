import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducers'

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

export default store