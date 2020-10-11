import * as actionTypes from './actionTypes'

export function addCreditCard(creditcard: ICreditCard) {
	const action: CreditCardAction = {
		type: actionTypes.ADD_CREDITCARD,
		creditcard,
	}

	return simulateHttpRequest(action)
}

export function removeCreditCard(creditcard: ICreditCard) {
	const action: CreditCardAction = {
		type: actionTypes.REMOVE_CREDITCARD,
		creditcard,
	}
	return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CreditCardAction) {
	return (dispatch: DispatchType) => {
		setTimeout(() => {
			dispatch(action)
		}, 500)
	}
}
