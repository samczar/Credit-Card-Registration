import * as actionTypes from './actionTypes'
import api from './api'

export const addCreditCard= (creditcard: ICreditCard) =>{
	return (dispatch:DispatchType)=>{
		return api.creditcard().create(creditcard).then(res=>{
			dispatch({
				type: actionTypes.ADD_CREDITCARD,
				creditcard:res.data
			})
		}).catch(err=>console.log(err))
	}



}

export function removeCreditCard(id: number) {
	return (dispatch:DispatchType)=>{
		api.creditcard().delete(id).then((resp)=>{
			dispatch({
				type: actionTypes.REMOVE_CREDITCARD,
				creditcard:resp.data,
			})
		})
	}
}

export const loadData = () => (dispatch: DispatchType) => {
	api
		.creditcard()
		.loadAll()
		.then((resp) => {

			dispatch({
				type: actionTypes.LOAD_DATA_SUCCESS,
				creditcard: resp.data,
			})
		})
		.catch((err) => console.log(err))
}
