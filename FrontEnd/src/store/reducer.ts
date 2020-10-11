import * as actionTypes from './actionTypes'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const initialState: CreditCardState = {
	creditcards: [
		{
			id: 1,
			card_number: '1234-123445-34555',
			cvc: 2345,
			expiry: '20-11-21',
		},
	],
}

const User: IUser = {
	id: 1,
	firstName: 'Samson',
}

let UserReducer = (state: IUser = User, action: UserAction) => {
	switch (action.type) {
		case actionTypes.GET_USER:
			return { ...state, firstName: state.firstName }
	}
	return state
}

let reducer = (
	state: CreditCardState = initialState,
	action: CreditCardAction
): CreditCardState => {
	switch (action.type) {
		case actionTypes.ADD_CREDITCARD:
			const newCreditCard: ICreditCard = {
				id: Math.random(), // not really unique
				card_number: action.creditcard.card_number,
				cvc: action.creditcard.cvc,
				expiry: action.creditcard.expiry,
			}
			return {
				...state,
				creditcards: state.creditcards.concat(newCreditCard),
			}
		case actionTypes.REMOVE_CREDITCARD:
			const updatedCreditCards: ICreditCard[] = state.creditcards.filter(
				(creditcard) => creditcard.id !== action.creditcard.id
			)
			return {
				...state,
				creditcards: updatedCreditCards,
			}
	}
	return state
}

export default (history: any) =>
	combineReducers({ router: connectRouter(history), reducer, UserReducer })
