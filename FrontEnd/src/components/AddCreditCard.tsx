import * as React from 'react'

type Props = {
	saveCreditCard: (creditcard: ICreditCard | any) => void
}
/**
 *
 * @param param0
 * With much time react-redux forms will be a better solution with it s inbuilt validation form
 */

export const AddCreditCard: React.FC<Props> = ({ saveCreditCard }) => {
	const [creditcard, setCreditcard] = React.useState<ICreditCard | {}>()

	const handleCreditCardData = (e: React.FormEvent<HTMLInputElement>) => {
		setCreditcard({
			...creditcard,
			[e.currentTarget.id]: e.currentTarget.value,
		})
	}

	const addNewCreditCard = (e: React.FormEvent) => {
		e.preventDefault()
		saveCreditCard(creditcard)
	}

	return (
		<form onSubmit={addNewCreditCard} className="Add-creditcard">
			<input
				type="text"
				id="card_number"
				placeholder="Card Number"
				onChange={handleCreditCardData}
			/>
			<input
				type="text"
				id="cvc"
				placeholder="CVC"
				onChange={handleCreditCardData}
			/>
			<input
				type="expiry"
				id="expiry"
				placeholder="Expiry"
				onChange={handleCreditCardData}
			/>
			<button disabled={creditcard === undefined ? true : false}>
				Add CreditCard
			</button>
		</form>
	)
}
