import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {CrediCardReducer,UserReducer} from './reducer'

export default (history: any) =>
	combineReducers({
		router: connectRouter(history),
		reducer: CrediCardReducer,
		UserReducer,
	})
