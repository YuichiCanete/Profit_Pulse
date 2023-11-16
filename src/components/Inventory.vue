<script setup>
    import SideBar from './sideBar.vue'
    
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const newScreen = (nscr) => {
        router.push(nscr)
    };

</script>

<template>

    <div class="container">

        <div class="left">
            <SideBar/>
        </div>

        <div class="center">

            <h1>Inventory</h1>

            <div class="inventoryContainer">

                <div class="item">
                    <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-07/2b986f6dd0bc344814a3d066af0c699c/2pcChickenRice-500.jpeg" alt="">
                    <p style="width: 75%;">Chicken Manok</p>
                    <p style="width: 15%;">Quantity: 60</p>
                    <p style="width: 10%;">Price: P100</p>
                </div>

                <div class="item">
                    <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-06/5dacc151d1aabdcdbebe214d7f6dc2d1/BigMac-500.jpeg" alt="">
                    <p style="width: 75%;">Borgerr</p>
                    <p style="width: 15%;">Quantity: 9</p>
                    <p style="width: 10%;">Price: P75</p>
                </div>

                <div class="item">
                    <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-02-12/aeb65cab0aef750aade570398a28a6c6/Fries-300.jpeg" alt="">
                    <p style="width: 75%;">Large Fries</p>
                    <p style="width: 15%;">Quantity: 4000</p>
                    <p style="width: 10%;">Price: P200</p>
                </div>
                

            </div>

            <input type="button" value="Add Product" class="addButton" @click="newScreen('/addproduct')">
            
        </div>

        

    </div>
    
</template>

<style scoped>

    img {
        width: 75px;
        height: 75px;
        border-radius: 15px;
        margin-right: 15px;
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
    }
    .addButton {
        margin-top: 15px;
        float: right;
        padding: 15px;
        border-radius: 15px;
        border: none;
        font-weight: bold;
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
        transition: .25s;
    }

    .addButton:hover {
        transform: scale(110%);
    }

    .addButton:active{
        transform: scale(95%);
    }

    .item{
        background-color: rgb(255,255,255,.5);
        display: flex;
        margin: 15px;
        padding: 10px;
        color: #151515;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgb(0,0,0,.25);
    }

    .inventoryContainer {
        backdrop-filter: blur(15px);
        background-color: rgb(255,255,255,.25);
        padding: 10px;
        height: 75vh;
        overflow-y: scroll;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgb(0,0,0,.25);
    }

    .container {
        display: flex;
    }

    .center {
        width: 100%;
        margin: 15px;
    }



</style>

