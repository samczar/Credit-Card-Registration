import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'



type Props = {
	creditcard: ICreditCard
	removeCreditCard: any
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
				<h1>{creditcard.cardNumber}</h1>
				<p>{creditcard.expiryDate}</p>
				<p>{creditcard.cvc}</p>
			</div>
			<button onClick={() => deleteCreditCard(creditcard)}>Delete</button>
		</div>
	)
}
