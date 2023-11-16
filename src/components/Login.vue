<script setup>
    
    //change screen when button clicked
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const newScreen = (nscr) => {
        router.push(nscr)
    };
    
    
    

</script>



<template>



    <div class="titleContainer">
        <h1>Profit Pulse</h1>
        <p>Simplify and <br>
        Accelerate Your <br>
        Business Management</p>
    </div>
    

    <div class="container">

        <h1>Login</h1>
        <input type="text" placeholder="Username" class="textInput"> <br>
        <input type="password" placeholder="Password" class="textInput"> <br>

        <br>

        
        <input type="button" value="Log-in" class="buttonInput" @click="newScreen('/main')">
        <input type="button" value="Sign-in" class="buttonInput" @click="newScreen('/main')">
        
        
        
        


    </div>
    


    

    
</template>

<style scoped>

    .titleContainer {
        position: absolute;        
        top: 50%;
        left: 25%;
        transform: translate(-50%,-50%);
        text-align: left;
        font-size: 25px;
    }

    .container {
        position: absolute;        
        top: 50%;
        left: 75%;
        transform: translate(-50%,-50%);

        text-align: center;
        background-color: rgb(255,255,255,.1);
        border: 2px solid rgb(255,255,255,.5);
        backdrop-filter: blur(15px);
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
        border-radius: 15px;
        padding: 10px;
        width: 30%;
    }

    .textInput {
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
        border: none;
        margin-bottom: 10px;
        width: 75%;
        padding: 10px;
        border-radius: 15px;
    }

    .textInput:focus {
        outline: none;
    }

    .buttonInput {
        
        border: none;
        background-color: #0265e7;
        border-radius: 15px;
        padding: 10px;
        width: 35%;
        font-weight: bold;
        color: white;
        box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
        
        margin-left: 5px;
        margin-right: 5px;
        margin-bottom: 10px;
        transition: .25s;
    }

    .buttonInput:hover{
        transform: scale(110%);
    }

    .buttonInput:active {
       transform: scale(95%);
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        text-decoration: underline;
    }

</style>

