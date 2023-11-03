<template>
    <div class="background-image">
        <br>
        <div class="container">
            <h1>ชื่อรุ่น : {{ cabinet.Name }}</h1>
            <hr>
        <p>ขนาด : {{ cabinet.Size }} </p>
        <p>น้ำหนัก : {{ cabinet.Weight }}</p>
        <p>วัสดุ : {{ cabinet.Material }} </p>
        <p>ประเภท : {{ cabinet.Type }}</p>
        <p>สี : {{ cabinet.Color }}</p>
        <p>ผู้ผลิต : {{ cabinet.Manufacturer }}</p>
        <p>น้ำหนัก(กิโลกรัม) : {{ cabinet.Weight }}</p>
        <p>ราคา(บาท) : {{ cabinet.Price }}</p>
        <br>
        <p>
            <center>
                
                <button v-on:click="navigateTo('/')" class="btn btn-primary">กลับ</button>
            </center>
        </p>
        
    </div>
</div>
</template>

<script>

import CabinetService from '@/services/CabinetService'

export default {

    data() {
        return {
            cabinet: null
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let cabinetId = this.$route.params.cabinetId
            this.cabinet = (await CabinetService.show(cabinetId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped>
.background-image {
    background-image: url('~@/pic/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}

</style>
