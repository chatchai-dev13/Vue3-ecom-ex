import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'

// service
import orderProductService from '@/services/orderProductService'

export function useProductService() {

    const store = useStore()
    const route = useRoute()
    
    const max_amount = ref(20)
    const item_amount = ref(1)
    const item_price = ref(0)
    const item_total = ref(0)

    const isDisabled = ref(false)

    onMounted(() => {
        fnGetProductID(route.params.id)
    })

    const fnGetProductID = async (id) => {
        const res = await orderProductService.getProductID(id)
        item_price.value = res.data.price
        item_total.value = item_price.value

    }

    const fnIncrease = () => {        
        if (item_amount.value < max_amount.value) {
            item_amount.value += 1
            item_total.value = (item_price.value * item_amount.value)
        }
    }

    const fnReduce = () => {
        if (item_amount.value != 1) {
            item_amount.value -= 1
            item_total.value = (item_price.value * item_amount.value)
        }
    }

    const fnNumber = (e) => {
        let value = e.target.value

        // เอาเฉพาะตัวเลขเท่านั้น
        value = value.replace(/[^0-9]/g, '')
        let num = parseInt(value)

        if (num > max_amount.value) {
            num = max_amount.value
        }

        if (value.length == 0 || value.length > 2) {
            num = 1
        }

        if (value == 0) {
            num = 1
        }

        item_total.value = (item_price.value * num)
        item_amount.value = num        
    }

    const fnAddCart = async () => {
        isDisabled.value = true

        store.dispatch("addCart", item_amount.value)
        const res = await orderProductService.updateCart(route.params.id, { amount: store.getters.getCount })

        if (res.status === 200) {
            Swal.fire({
                title: "เพิ่มสินค้าสำเร็จ",
                icon: "success",
                draggable: true
            });

            setTimeout(() => {
                isDisabled.value = false;
            }, 1000); // 3 วินาที
        }
    }

    return {
        fnIncrease, fnReduce, fnNumber, fnAddCart,
        item_amount, item_price, item_total, isDisabled
    }
}