import * as React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { CreditCard } from '../components/CreditCard'
import { AddCreditCard } from '../components/AddCreditCard'
import { addCreditCard, removeCreditCard } from '../store/actionCreators'
import { Dispatch } from 'redux'

const Home = () => {
	const creditcards: readonly ICreditCard[] = useSelector(
		(state: any) => state.reducer.creditcards,
		shallowEqual
	)

	const User = useSelector((state: any) => state.UserReducer)

	const dispatch: Dispatch<any> = useDispatch()

	const saveCreditCard = React.useCallback(
		(creditcard: ICreditCard) => dispatch(addCreditCard(creditcard)),
		[dispatch]
	)

	return (
		<main>
			<h3>Welcome {User.firstName}</h3>
			<AddCreditCard saveCreditCard={saveCreditCard} />
			{creditcards.map((creditcard: ICreditCard) => (
				<CreditCard
					key={creditcard.id}
					creditcard={creditcard}
					removeCreditCard={removeCreditCard}
				/>
			))}
		</main>
	)
}

export default Home
