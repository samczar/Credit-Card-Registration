import * as React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { CreditCard } from '../components/CreditCard'
import { AddCreditCard } from '../components/AddCreditCard'
import {
	addCreditCard,
	removeCreditCard,
	loadData,
} from '../redux/actions/actionCreators'
import { Dispatch } from 'redux'



const Home = () => {
	const creditcards: readonly ICreditCard[] = useSelector(
		(state: any) => state.reducer.creditcards,
		shallowEqual
	)

	const User = useSelector((state: any) => state.UserReducer)

	const dispatch: Dispatch<any> = useDispatch()

	React.useEffect(() => {
		dispatch(loadData())
	},[] )

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
					removeCreditCard={removeCreditCard(creditcard.id)}
				/>
			))}
		</main>
	)
}

export default Home
