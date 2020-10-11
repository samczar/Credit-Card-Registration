import * as actionTypes from '../actions/actionTypes'



const initialState: CreditCardState = {
	creditcards: [],
}

export const CrediCardReducer= (
	state: CreditCardState = initialState,
	action: any
): CreditCardState => {
	switch (action.type) {
		case actionTypes.LOAD_DATA_SUCCESS:
			return { ...state, creditcards:action.creditcard }

		case actionTypes.ADD_CREDITCARD:
			const newCreditCard: any = {
				
				cardNumber: action.creditcard.cardNumber,
				cvc: action.creditcard.cvc,
				expiryDate: action.creditcard.expiry,
			}
			return {
				...state,
				...state.creditcards
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



const User: IUser = {
	id: 1,
	firstName: 'Samson',
}

export const UserReducer = (state: IUser = User, action: UserAction) => {
	switch (action.type) {
		case actionTypes.GET_USER:
			return { ...state, firstName: state.firstName }
	}
	return state
}


