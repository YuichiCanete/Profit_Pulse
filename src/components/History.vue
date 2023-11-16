<script setup>
    import SideBar from './sideBar.vue'
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
</script>

<template>

    <div class="container">

        <div class="left">
            <SideBar/>
        </div>

        <div class="center">

            <h1>History</h1>

            <div class="inventoryContainer">
                
                <fieldset class="itemHistory">
                    <legend>10/27/2023</legend>
                    <div class="item">
                        <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-02-12/aeb65cab0aef750aade570398a28a6c6/Fries-300.jpeg" alt="">
                        <p style="width: 75%;">Large Fries</p>
                        <p style="width: 15%;">Quantity: 1</p>
                        <p style="width: 10%;">Price: P200</p>
                    </div>

                    <div class="item">
                        <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-06/5dacc151d1aabdcdbebe214d7f6dc2d1/BigMac-500.jpeg" alt="">
                        <p style="width: 75%;">Borgerr</p>
                        <p style="width: 15%;">Quantity: 2</p>
                        <p style="width: 10%;">Price: P75</p>
                    </div>

                    <p style="text-align: right; margin-right: 15px; font-size: 25px;">Total Fee: P350</p>

                </fieldset>
                
                

            </div>

            

            
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

    .itemHistory {
        border: none;
        border-top: 2px solid #151515;
        border-bottom: 2px solid #151515;
    }

    legend {
        color: #003B89;
        font-size: 25px;
    }

    .item{
        background-color: rgb(255,255,255,.5);
        display: flex;
        margin: 15px;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgb(0,0,0,.25);
    }

    .inventoryContainer {
        color: #151515;
        backdrop-filter: blur(15px);
        background-color: rgb(255,255,255,.25);
        padding: 10px;
        height: 75vh;
        overflow-y: scroll;
        box-shadow: 2px 2px 4px rgb(0,0,0,.25);
        border-radius: 15px;
    }

    .container {
        display: flex;
    }

    .center {
        width: 100%;
        margin: 15px;
    }



</style>

