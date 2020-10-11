interface ICreditCard {
	id: number
	cardNumber: string
	cvc: number
	expiryDate: string
}

interface IUser {
	id: number
	firstName: string
}
type UserAction = {
	type: string
	user: IUser
}

type CreditCardState = {
	creditcards: ICreditCard[]
}

type CreditCardAction = {
	type: string
	creditcard: ICreditCard
	creditcards?: ICreditCard[]
}

type DispatchType = (args: CreditCardAction) => CreditCardAction
