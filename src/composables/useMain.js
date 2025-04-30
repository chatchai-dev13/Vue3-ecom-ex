import { ref } from 'vue'


// service
import mainPageService  from '../services/mainPageService'

export function useMainService() {
    const productList = ref()

    const fnGetProduct = async () => {
        const res = await mainPageService.getProduct()
        productList.value = res.data
    }

    return {
        fnGetProduct,
        productList
    }
}