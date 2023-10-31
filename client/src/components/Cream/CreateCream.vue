<template>
    <div>
        <h1 class="form-header">Create Cream</h1>
        <form v-on:submit.prevent="createUser" class="cream-form">
                <p>ชื่อสินค้า: <input type="text" v-model="user.name"></p>
                <p>แบรนด์: <input type="text" v-model="user.brand"></p>
                <p>วิธีใช้: <input type="text" v-model="user.usage"></p>
                <p>ตำเตือน: <input type="text" v-model="user.warning"></p>
                <p>วันที่ผลิต: <input type="text" v-model="user.manufactureDate"></p>
                <p>วันที่หมดอายุ: <input type="text" v-model="user.expiryDate"></p>
                <p>ส่วนประกอบ: <input type="text" v-model="user.components"></p>
            <p class="button-container">
    <button type="submit" class="create-btn">Create cream</button>
    <button v-on:click="navigateTo('/users/')" class="back-btn">Back</button>
</p>
        </form>
    </div>
</template>

<script>
import UsersService from '../../services/UsersService';

    export default {
        data () {
            return {
                user: {
                    name: '',
                    brand: '',
                    usage: '',
                    warning: '',
                    manufactureDate: '',
                    expiryDate: '',
                    components: '',
                }
            }
        },
        methods: {
            async createUser () {
                try {
                    await UsersService.post(this.user)
                    this.$router.push({
                        name: 'users'
                    })
                }catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>
<style scoped>
    .form-header {
        text-align: center;
        color: #f8f8f8;
        background-color: #564335;
        padding: 15px 0;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .cream-form {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    label {
        display: block;
        margin-bottom: 8px;
    }

    input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        margin-top: 5px;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .create-btn {
        flex: 1;
        padding: 10px;
        background-color: #3498db; /* Blue color */
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-right: 5px;
    }

    .back-btn {
        flex: 1;
        padding: 10px;
        background-color: #998570; /* Brown color */
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-left: 5px; /* Adjust the margin between buttons */
    }

    .create-btn:hover,
    .back-btn:hover {
        opacity: 0.9;
    }
</style>