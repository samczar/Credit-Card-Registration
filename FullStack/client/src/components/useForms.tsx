import * as React from 'react'


export default function useForms() {
    // const [creditcard, setCreditcard] = React.useState<ICreditCard | {}>()
    const [values, setValues] = React.useState< any | {}>()
    const [errors, setErrors] = React.useState({})

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
			setValues({
				...values,
				[e.currentTarget.id]: e.currentTarget.value,
			})
		}
    return {
            values,
			setValues,
            handleInputChange,
            errors,
            setErrors
		}
}
