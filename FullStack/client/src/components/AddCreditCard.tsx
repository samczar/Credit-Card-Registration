import * as React from 'react'
import { useDispatch } from 'react-redux'
import useForm from './useForms'




type Props = {
	saveCreditCard: (creditcard: ICreditCard | any) => void
}

/**
 *
 * @param param0
 * With much time react-redux forms will be a better solution with it s inbuilt validation form
 */

export const AddCreditCard: React.FC<Props> = ({ saveCreditCard }) => {


const { values, setValues, handleInputChange, errors, setErrors } = useForm()

	// const validate = ()=>{
	// 	let temp:any = {}
	// 	// temp.cardNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(values.cardNumber)
	// 	temp.cardNumber  = values.cardNumber ? '' : 'This Field is required'
	// 	temp.expiryDate = values.expiryDate ? '' : 'This Field is required'
	// 	temp.cvc = values.cvc ? '' : 'This Field is required'
	// 	setErrors({
	// 		...temp
	// 	})

	// 	return Object.values(temp).every(x =>x=="")
	// }

	const addNewCreditCard = (e: React.FormEvent) => {
		e.preventDefault()
		// if(validate()){
			console.log('values ', values)
			console.log('save ', saveCreditCard(values))
			console.log('check ', saveCreditCard)
			saveCreditCard(values)
		// }
		
	}

	return (
		<form
			autoComplete="off"
			noValidate
			onSubmit={addNewCreditCard}
			className="Add-creditcard"
		>
			<input
				type="text"
				id="card_number"
				placeholder="Card Number"
				onChange={handleInputChange}
			/>
			<input
				type="text"
				id="cvc"
				placeholder="CVC"
				onChange={handleInputChange}
			/>
			<input
				type="expiry"
				id="expiry"
				placeholder="Expiry"
				onChange={handleInputChange}
			/>
			<button disabled={values === undefined ? true : false}>
				Add CreditCard
			</button>
		</form>
	)
}
