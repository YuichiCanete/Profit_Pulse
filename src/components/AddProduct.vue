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
            <h1>Add Product</h1>
            <div class="addContainer">

                <div class="fields">
                    <img src="https://static.thenounproject.com/png/212328-200.png" alt="img">
                    <input type="text" placeholder="Product Name" class="inputText">
                    <input type="text" placeholder="Price" class="inputText">
                    <input type="text" placeholder="Quantity" class="inputText">
                </div>

                <div class="buttons" style="margin-top: 95px;">
                    <input type="button" value="Cancel" class="button" style="margin-right: 15px;">
                    <input type="button" value="Add" class="button">
                </div>

            </div>

            

        </div>


        

    </div>
    
</template>

<style scoped>

    .inputText {
        padding: 15px;
        border: none;
        margin-bottom: 15px;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
    }

    .inputText:focus {
        outline: none;
    }

    .button {
        margin-top: -30px;
        padding: 15px;
        border-radius: 15px;
        border: none;
        font-weight: bold;
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
        transition: .25s;
    }

    .button:hover {
        transform: scale(110%);
    }

    .button:active{
        transform: scale(95%);
    }

    .buttons {
        float: right;
    }


    .container {
        display: flex;
    }

    .center {
        width: 100%;
        margin: 15px;
    }
    .addContainer {
        color: #151515;

        backdrop-filter: blur(15px);
        background-color: rgb(255,255,255,.25);
        padding: 10px;
        height: 75vh;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgb(0,0,0,.25);
    }

    .fields {
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }




</style>

