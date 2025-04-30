<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { jwtDecode } from "jwt-decode";

const store = useStore()

onMounted( async () => {
    // store.dispatch("addCart", 2)
})

const callback = (response) => {
    // This callback will be triggered when the user selects or login to
    // his Google account from the popup

    const decoded = jwtDecode(response.credential);

    // console.log(response)
    console.log(decoded)
}

</script>

<template>
    <div class="fixed top-0 left-0 z-[3] navbar bg-base-200 border-b border-[#d4a373]/50">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl"><font-awesome-icon :icon="['fas', 'meteor']" />daisyUI</a>
        </div>
        <div class="flex-none gap-4">
            <div class="dropdown dropdown-end">
                <div class="form-control"><input type="text" placeholder="Search"
                    class="input input-bordered w-24 md:w-auto">
                </div>
            </div>
            <div class="dropdown dropdown-end mr-4 flex">
                <RouterLink :to="{ name: 'order-page', params: { id: 1 } }">
                    <label tabindex="0" class="btn btn-ghost btn-circle menu-horizontal w-[68px] h-[58px] p-[6%] mr-4">
                        <div class="indicator">
                            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-[18px]" />
                            <span class="badge badge-sm bg-error indicator-item text-white h-[22px] top-[-2px] left-[2px]">{{ store.getters.getCount }}</span>
                        </div>
                        <span>ตระกร้า</span>
                    </label>
                </RouterLink>
                <label tabindex="0" onclick="my_modal_login.showModal()"
                     class="btn btn-ghost btn-circle menu-horizontal w-[58px] h-[58px] p-[6%]">
                    <font-awesome-icon :icon="['fas', 'user']" class="text-[18px]" />
                    <span>สมาชิก</span>
                </label>
                <!-- <label tabindex="0" class="btn btn-ghost btn-circle avatar menu-horizontal p-[1%]">
                    <div class="rounded-full">
                        <img src="/images/profile.jpg" />
                    </div>
                </label> -->
            </div>
        </div>
    </div>

    <div class="hidden md:block">
        <div class="fixed top-0 left-0 z-[3] mt-[75px] navbar bg-base-100 p-0 min-h-0 shadow-lg">
            <div class="navbar-start"></div>
            <div class="navbar-center">
                <ul class="menu menu-horizontal rounded-box gap-10">
                    <li>
                        <a><font-awesome-icon :icon="['fas', 'bars']" /> หมวดหมู่สินค้า</a>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'main-page' }">
                            <a><font-awesome-icon :icon="['fas', 'house-chimney']" /> หน้าหลัก</a>
                        </RouterLink>
                    </li>
                    <li>
                        <a><font-awesome-icon :icon="['fas', 'cart-shopping']" /> สินค้าทั้งหมด</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-end"></div>
        </div>
    </div>

    <!-- Open the modal using ID.showModal() method -->
    <dialog id="my_modal_login" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <GoogleLogin :callback="callback"/>
            <div class="modal-action">
                <form method="dialog">
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>