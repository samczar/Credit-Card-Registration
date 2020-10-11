interface ICreditCard {
	id: number
	card_number: string
	cvc: number
	expiry: string
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
}

type DispatchType = (args: CreditCardAction) => CreditCardAction
