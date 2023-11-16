<script setup>
import SideBar from './sideBar.vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

</script>

<template>
    <div class="container">

        <div class="left">

            <SideBar></SideBar>

        </div>

        <div class="center">

            <div class="searchBar">
                <Button icon="pi pi-search" class="searchButton"></Button>
                <input type="text" placeholder='Search' class='searchText'>
            </div>

            <div class="itemContainer">

                <div class="itemDesc">
                    <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-07/2b986f6dd0bc344814a3d066af0c699c/2pcChickenRice-500.jpeg" alt="" class="item">
                    <p>Chicken Manok</p>
                    <p>P100</p>
                </div>

                <div class="itemDesc">
                    <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-06/5dacc151d1aabdcdbebe214d7f6dc2d1/BigMac-500.jpeg" alt="" class="item">
                    <p>Borgerr</p>
                    <p>P75</p>
                </div>

                <div class="itemDesc">
                    <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-02-12/aeb65cab0aef750aade570398a28a6c6/Fries-300.jpeg" alt="" class="item">
                    <p>Large Fries</p>
                    <p>P200</p>
                </div>

                <div class="itemDesc">
                    <img src="https://cdn-icons-png.flaticon.com/512/262/262038.png" alt="" class="item" style="border-radius: 50px; padding: 15px; width: 75px; height: 75px;">
                    <p>New Item</p>
                </div>

            </div>

        </div>

        <div class="right">
            <h1>Items</h1>
            <div class="itemList">
                <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-07/2b986f6dd0bc344814a3d066af0c699c/2pcChickenRice-500.jpeg" alt="" class="smallItem">
                <div class="desc">
                    <p>Chicken Manok</p>
                    <p>P300</p>
                </div>
                <div class='addminus'>
                    <input type='button' class='button' value="-">
                    <p style='transform: translate(0,5%)'>3</p>
                    <input type='button' class='button' value="+">
                </div>
            </div>
            <div class="itemList">
                <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-03-06/5dacc151d1aabdcdbebe214d7f6dc2d1/BigMac-500.jpeg" alt="" class="smallItem">
                <div class="desc">
                    <p>Borgerr</p>
                    <p>P75</p>
                </div>
                <div class='addminus'>
                    <input type='button' class='button' value="-">
                    <p style='transform: translate(0,5%)'>1</p>
                    <input type='button' class='button' value="+">
                </div>
            </div>
            <div class="itemList">
                <img src="https://d3bjzufjcawald.cloudfront.net/public/web/2019-02-12/aeb65cab0aef750aade570398a28a6c6/Fries-300.jpeg" alt="" class="smallItem">
                <div class="desc">
                    <p>Large Fries</p>
                    <p>P400</p>
                </div>
                <div class='addminus'>
                    <input type='button' class='button' value="-">
                    <p style='transform: translate(0,5%)'>2</p>
                    <input type='button' class='button' value="+">
                </div>
            </div>


            <div class="total">
                <h2>Total Payment</h2>
                <div class="totalBg">
                    <p>P775.00</p>
                </div>
                <br>
                <input type="button" value="Proceed" class='totalButton'> <br>
                <input type="button" value="Cancel" class='totalButton'>
            </div>


        </div>

    </div>
</template>

<style scoped>

.totalBg {
    background-color: white;
    color: #151515;
    font-weight: bold;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
}
.container {
    display: flex;
}

h1 {
    text-align: center;
}

p {
    margin: 10px;
}

.center {
    margin: 10px;
    width: 75%;
    margin-right: 10px;
    flex-direction: row;
    overflow-y: scroll;
}

.right {
    margin: 10px;
    width: 20%;
}

.icon {
    background: #303030;
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 15px;
    transition: .25s;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, .5);
}

.icon:hover {
    background: #151515;
}

.total {
    margin-top: 125px;
    text-align: center;
}

.searchButton {
    color: white;
    background-color: #0265e7;
    border: none;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
    width: 10%;
    height: 45px;
    transition: .25s;
}

.searchText {
    padding: 15px;
    border: none;
    border-radius: 15px;
    margin-left: 10px;
    width: 84%;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
}

.searchText:focus {
    outline: none;
}

.itemContainer {
    display: inline-flex;
}

.itemDesc {
    margin: 15px;
    color: white;
    text-align: center;
}

.item {
    background: white;
    border-radius: 15px;
    width: 100px;
    height: 100px;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
    transition: .25s;
}

.item:hover {
    scale: 110%;
}

.itemList {
    color: white;
    display: inline-flex;
}

.smallItem {
    background: white;
    border-radius: 15px;
    width: 50px;
    height: 50px;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
    transition: .25s;
}

.button {
    transform: translate(0, 50%);
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 5px;
    transition: .25s;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
}

.totalButton:hover{
    scale: 110%;
}

.totalButton:active {
    transform: scale(95%);
}

.desc {
    transform: translate(0, -10%);
    width: 150px;
}

.addminus {
    display: inline-flex;
}


.totalButton {
    background: #0265e7;
    color: white;
    font-weight: bold;
    border: none;
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
    transition: .25s;
    box-shadow: 4px 4px 4px rgb(0, 0, 0, .5);
}
</style>

