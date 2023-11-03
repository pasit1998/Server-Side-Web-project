<template>
    <div class="background-image">
    <div class="container">
        <br>
        <h1>เพิ่มข้อมูล</h1>
        <center>

            <form v-on:submit.prevent="createCabinet">
                <p class="text-muted">
                    <label for="name">ชื่อรุ่น </label>
                    <input type="text" v-model="cabinet.Name" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="size">ขนาด </label>
                    <input type="text" v-model="cabinet.Size" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="material">วัสดุ </label>
                    <input type="text" v-model="cabinet.Material" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="type">ประเภท </label>
                    <input type="text" v-model="cabinet.Type" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="color">สี </label>
                    <input type="text" v-model="cabinet.Color" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="manufacturer">ผู้ผลิต </label>
                    <input type="text" v-model="cabinet.Manufacturer" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="weight">น้ำหนัก(กิโลกรัม) </label>
                    <input type="text" v-model="cabinet.Weight" class="form-control" style="width: 30%;">
                </p>
                <p class="text-muted">
                    <label for="price">ราคา(บาท) </label>
                    <input type="text" v-model="cabinet.Price" class="form-control" style="width: 30%;">
                </p>
                <br>
                <button type="submit" class="btn btn-primary">ยืนยัน</button>
            </form>
        </center>
    </div>
</div>
</template>

<script>

import CabinetService from '@/services/CabinetService'
export default {
    data() {
        return {

            cabinet: {
                Size: "",
                Material: "",
                Type: "",
                Color: "",
                Manufacturer: "",
                Weight: "",
                Price: ""

            }
        }
    },
    methods: {
        async createCabinet() {
            try {
                await CabinetService.post(this.cabinet)
                this.$router.push({
                    name: 'cabinets',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped>
.background-image {
  text-align: center;
  background-image: url('~@/pic/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}



</style>