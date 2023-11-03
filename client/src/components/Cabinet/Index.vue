<template>
    <div class="background-image">
        <div class="container ">
            <br><br> 
            <h2>จำนวนข้อมูลในระบบทั้งหมด {{ cabinets.length }} ตู้

                <button class="btn btn-primary" @click="navigateTo('/cabinet/create')">เพิ่มข้อมูล</button>
            </h2>
            <br>
            <div v-for="cabinet in cabinets" :key="cabinet.id" class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title">ชื่อรุ่น : {{ cabinet.Name }}</h5>
                    <p class="card-text">ขนาด : {{ cabinet.Size }} </p>
                    <p class="card-text">น้ำหนัก(กิโลกรัม) : {{ cabinet.Weight }}</p>
                    <p class="card-text">ราคา(บาท) : {{ cabinet.Price }}</p>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-info" @click="navigateTo('/cabinet/' + cabinet.id)">ดูข้อมูล</button>
                        <button class="btn btn-warning ml-2"
                            @click="navigateTo('/cabinet/edit/' + cabinet.id)">แก้ไขข้อมูล</button>
                        <button class="btn btn-danger ml-2" @click="deleteCabinet(cabinet)">ลบข้อมูล</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CabinetService from '@/services/CabinetService'

export default {
    data() {
        return {
            cabinets: []
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteCabinet(cabinet) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await CabinetService.delete(cabinet)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.cabinets = (await CabinetService.index()).data
        }
    },

    async created() {
        this.cabinets = (await CabinetService.index()).data
    }
}

</script>


<style scoped>
.background-image {
    text-align: center;
    background-image: url('~@/pic/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

.container {
    max-width: 700px;
}

.card {
    width: 100%;
}

.btn {
    font-size: 14px;

}

.card-text {
    font-size: 16px;
    text-align: left;
}
</style>
