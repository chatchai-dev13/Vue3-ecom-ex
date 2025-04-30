<script setup>

</script>

<template>
  <div class="mt-[90px] md:mt-[138px]">
    <div class="card bg-base-200 shadow-xl m-[2%] md:m-0">
      <div class="card-body p-2 md:p-[2rem]">
        <h2 class="card-title">ตะกร้าสินค้า</h2>
        <p>รายการคำสั่งซื้อทั้งหมดของคุณ</p>
        <div class="border-t-2 border-[#d4a373]"></div>
        <div v-for="item in 5" class="grid grid-cols-3 md:grid-cols-12 gap-4 mt-2 border-b-2 border-[#d4a373]">

          <div class="md:col-span-2">
            <figure class="w-[80px]"><img src="/images/profile.jpg" alt="Shoes" /></figure>
          </div>

          <div class="col-span-2 md:col-span-10 md:mb-2">
            <div class="grid grid-cols-4 md:grid-cols-12 gap-1">

              <div class="col-span-4 md:col-span-4">
                <small class="font-bold text-[gray]">รหัสสินค้า : 4903015560322</small>
                <h6 class="font-bold">ข้าวโพดอบกรอบรสเนย 65 กรัม</h6>

                <div class="flex justify-between md:block">
                  <small class="font-bold text-[gray]">ราคาต่อชิ้น</small>
                  <h6 class="font-bold text-success"><small>฿</small>50.-</h6>
                </div>
              </div>

              <div class="col-span-4 md:col-span-4 justify-items-center mb-3 md:mb-0">
                <div class="form-control w-[70%]">
                  <div class="input-group">
                    <!-- ลด -->
                    <button class="btn btn-square btn-success text-[22px]">
                      <font-awesome-icon :icon="['fas', 'minus']" />
                    </button>

                    <input type="text" @focus="$event.target.select()"
                      class="input input-bordered w-full text-center text-[22px] border-success" />

                    <!-- เพิ่ม -->
                    <button class="btn btn-square btn-success text-[22px]">
                      <font-awesome-icon :icon="['fas', 'plus']" />
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-span-2 md:col-span-2 md:justify-items-center]">
                <h6 class="font-bold text-error text-[18px]"><small>฿</small>50.-</h6>
              </div>

              <div class="col-span-2 md:col-span-2 justify-items-end md:justify-items-center mb-2 md:mb-0">
                <div class="cursor-pointer hover:text-error">
                  <font-awesome-icon :icon="['fas', 'trash']" />
                  <span class="font-bold"> ลบ</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- ราคารวม -->
        <div class="grid grid-cols-2">
          <div class="col-span-1">
            <small class="font-bold text-[gray] text-[14px]">รวมทั้งหมด :</small>
            <h1 class="font-bold text-error text-[22px]"><small>฿</small>12,150.-</h1>
          </div>
          <div class="col-span-1 text-end">
            <button class="btn btn-success text-[16px] w-full md:w-[200px]">ดำเนินการต่อ</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
