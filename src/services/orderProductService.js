import { BASE_API_URL } from '../constants'
import axios from 'axios'

// const token = JSON.parse(localStorage.getItem('token'))

const getProductID = async (id) => {
    try {
        // const response = await axios.get(`${BASE_API_URL}/invc`, {
        //   headers: { Authorization: 'Bearer ' + token?.access_token }
        // })

        const res = await axios.get(`${BASE_API_URL}/ecom/${id}`)
        return res

    } catch (error) {
        throw error
    }
}

const updateCart = async (id, data) => {
    try {
        // const response = await axios.get(`${BASE_API_URL}/invc`, {
        //   headers: { Authorization: 'Bearer ' + token?.access_token }
        // })

        const res = await axios.put(`${BASE_API_URL}/ecom/${id}`, data)
        return res

    } catch (error) {
        throw error
    }
}

export default { getProductID, updateCart }
