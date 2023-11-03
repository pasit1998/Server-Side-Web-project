<template>
    <div class="background-image">
    <div class="container">

        <center>
        <h1>แก้ไขข้อมูล</h1>
        <form v-on:submit.prevent="editCabinet">
            <div class="form-group" style="width: 50%;">
                <label for="name">ชื่อรุ่น </label>
                <input type="text" v-model="cabinet.Name" class="form-control">
            </div><br>
            <div class="form-group" style="width: 50%;">
                <label for="size">ขนาด </label>
                <input type="text" v-model="cabinet.Size" class="form-control">
            </div><br>
            <div class="form-group" style="width: 50%;">
                <label for="material">วัสดุ </label>
                <input type="text" v-model="cabinet.Material" class="form-control">
            </div><br>
            <div class="form-group" style="width: 50%;">
                <label for="type">ประเภท </label>
                <input type="text" v-model="cabinet.Type" class="form-control">
            </div><br>
            <div class="form-group" style="width: 50%;">
                <label for="color">สี </label>
                <input type="text" v-model="cabinet.Color" class="form-control">
            </div><br>
            <div class="form-group" style="width: 50%;">
                <label for="manufacturer">ผู้ผลิต </label>
                <input type="text" v-model="cabinet.Manufacturer" class="form-control">
            </div><br>
            <div class="form-group" style="width: 50%;">
                <label for="weight">น้ำหนัก(กิโลกรัม) </label>
                <input type="text" v-model="cabinet.Weight" class="form-control" >
            </div><br>
            <div class="form-group"  style="width: 50%;">
                <label for="price">ราคา(บาท) </label>
                <input type="text" v-model="cabinet.Price" class="form-control">
            </div>
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
        async editCabinet() {
            try {
                await CabinetService.put(this.cabinet)
                this.$router.push({
                    name: 'cabinets'
                })
            } catch (err) {
                console.log(err)
            }
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
