import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

type Props = {
	creditcard: ICreditCard
	removeCreditCard: (creditcard: ICreditCard) => void
}

export const CreditCard: React.FC<Props> = ({
	creditcard,
	removeCreditCard,
}) => {
	const dispatch: Dispatch<any> = useDispatch()

	const deleteCreditCard = React.useCallback(
		(creditcard: ICreditCard) => dispatch(removeCreditCard(creditcard)),
		[dispatch, removeCreditCard]
	)

	return (
		<div className="CreditCard">
			<div>
				<h1>{creditcard.card_number}</h1>
				<p>{creditcard.expiry}</p>
				<p>{creditcard.cvc}</p>
			</div>
			<button onClick={() => deleteCreditCard(creditcard)}>Delete</button>
		</div>
	)
}
