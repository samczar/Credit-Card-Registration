import axios from 'axios'

const baseUrl:string= 'https://localhost:5001/api/'

export default {
    creditcard(url:string=baseUrl +'creditcards'){
        return {
					loadAll: () => axios.get(url),
					fetchById: (id: number) => axios.get(`${url}/${id}`),
					create: (newRecord: any) => axios.post(url, newRecord),
					update: (id: number, updateRecord: {}) =>
						axios.put(url, updateRecord),
					delete: (id: number) => axios.delete(`${url}/${id}`),
				}
    }
}