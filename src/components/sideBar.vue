<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const newScreen = (nscr) => {
        router.push(nscr)
    };
</script>

<template>

    <div class="container">
        <div class="iconTainer" @click="newScreen('/main')">
            <span class="pi pi-shopping-cart"></span>    
        </div>
        <div class="iconTainer" @click="newScreen('/inventory')">
            <span class="pi pi-box"></span>    
        </div>
        <div class="iconTainer" @click="newScreen('/history')">
            <span class="pi pi-history"></span>    
        </div>
    </div>

    <!-- <div class="iconContainer">
        <span class="pi pi-user"></span> <br>
        <span class="pi pi-table"></span> <br>
        <span class="pi pi-history"></span>
    </div> -->
    

</template>

<style scoped>

    .pi {
        font-size: 25px;
        width: 30px;
        height: 30px;
        margin-top: 30%;
    }

    .iconTainer {
        text-align: center;
        border-radius: 15px;
        width: 60px;
        height: 60px;
        transition: .25s;
        margin-left: 20%;
        margin-top: 25px;
        color: black;
    }

    .iconTainer:hover {
        background-color: #0055c5;
        box-shadow: 2px 2px 4px rgb(0,0,0,.25);
        color: white;
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 100px;
        height: 100vh;
        background-color: white;
        border-radius: 20px;
        margin: 10px;
        box-shadow: 4px 4px 4px rgb(0,0,0,.25);
    }


</style>

