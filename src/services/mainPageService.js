import { BASE_API_URL } from '../constants'
import axios from 'axios'

// const token = JSON.parse(localStorage.getItem('token'))

const getProduct = async () => {
    try {
        // const response = await axios.get(`${BASE_API_URL}/invc`, {
        //   headers: { Authorization: 'Bearer ' + token?.access_token }
        // })

        const res = await axios.get(`${BASE_API_URL}/ecom`)
        return res

    } catch (error) {
        throw error
    }
}

export default { getProduct }
