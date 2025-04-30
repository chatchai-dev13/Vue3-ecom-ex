<script setup>
// composables
import { useProductService } from '@/composables/useProduct'

const {
    fnIncrease, fnReduce, fnNumber, fnAddCart,
    item_amount, item_price, item_total, isDisabled
} = useProductService()

</script>

<template>
    <div class="card">
        <div class="card-body pt-2 p-4 md:pl-4 md:border-l-2 md:border-[#d4a373]/50">
            <h2 class="card-title">INSTITUTO</h2>
            <h6>INSTITUTO ESPANOL LACTO ADVANCE BODY LOTION 500ml</h6>

            <div class="stat-title text-success font-bold text-[20px] md:text-[18px]">
                <b>ราคา </b><small>฿</small>{{ Math.floor(item_price).toLocaleString() }}.-
            </div>

            <div class="card-actions border-t-2 border-[#d4a373]/50">
                <div class="grid grid-cols-2 gap-2 md:gap-4 mt-4">
                    <div class="form-control">
                        <div class="input-group">
                            <!-- ลด -->
                            <button @click="fnReduce()" class="btn btn-square btn-success text-[22px]">
                                <font-awesome-icon :icon="['fas', 'minus']" />
                            </button>

                            <input type="text" v-model="item_amount" 
                                @input ="fnNumber"
                                @focus="$event.target.select()"
                                class="input input-bordered w-full text-center text-[22px] border-success" 
                            />

                            <!-- เพิ่ม -->
                            <button @click="fnIncrease()" class="btn btn-square btn-success text-[22px]">
                                <font-awesome-icon :icon="['fas', 'plus']" />
                            </button>
                        </div>
                    </div>

                    <div class="text-end">
                        <button @click="fnAddCart()" 
                            :disabled="isDisabled"
                            class="btn btn-success w-full text-[16px]">
                            <font-awesome-icon :icon="['fas', 'cart-plus']" /> เพิ่มลงตะกร้า
                        </button>
                    </div>
                </div>
            </div>

            <div class="text-center mt-6 md:mt-[40px] text-balck font-bold text-[24px]">
                <p class="mb-4">ราคารวม</p>
                <b class="text-error"><small>฿</small>{{ Math.floor(item_total).toLocaleString() }}.-</b>
            </div>
        </div>
    </div>
</template>