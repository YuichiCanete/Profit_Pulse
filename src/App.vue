<script setup>
import { ref } from 'vue';
import Button from 'primevue/button'
import TextInput from 'primevue/inputtext'

let screen = ref();

const switchScreen = (newScreen) => {
  screen.value = ref(newScreen);
  console.log(screen.value);
}

switchScreen('login')

const checkLogin = () => {
  const username = document.getElementById('userName').value;
  const password = document.getElementById('userPass').value;

  // Perform your validation here (replace this with your logic)
  const validUsername = 'adminUser'; // Replace with your valid username
  const validPassword = 'adminPass'; // Replace with your valid password

  if (username === validUsername && password === validPassword) {
    switchScreen('main');
  } else {
    // Handle incorrect login credentials
    console.log('Invalid username or password');
  }
};

const itemList = ref([
  { Name: "Pancit Canton", Price: 15, Quantity: 0, Inventory: 17, imgSrc: "https://cdn.shopify.com/s/files/1/0147/9445/7136/products/image_b01660bd-1c04-422a-b21b-ed929d9f6b79.jpg?v=1672164285" },
  { Name: "Sardines", Price: 30, Quantity: 0, Inventory: 14, imgSrc: "https://cdn.shopify.com/s/files/1/0515/6090/6910/products/051320-Order-Form-TS_512x512.jpg?v=1651653580" },
  { Name: "Bear Brand", Price: 15, Quantity: 0, Inventory: 16, imgSrc: "https://ever.ph/cdn/shop/products/100000059414-Bear-Brand-Fortified-Powdered-Milk-Drink-680g-220824_6a95dcf3-ddb3-495f-bcb5-851409fe694c_580x.jpg?v=1696558448" },
  { Name: "Milo", Price: 12, Quantity: 0, Inventory: 19, imgSrc: "https://shopsuki.ph/cdn/shop/products/milo-grains-breakfast-milo-cereals-20g-16888932532356_1024x.jpg?v=1693464487" },
  { Name: "Corned Beef", Price: 45, Quantity: 0, Inventory: 12, imgSrc: "data:image/jpeg;base64,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" },
  { Name: "Beef Loaf", Price: 40, Quantity: 0, Inventory: 11, imgSrc: "https://images.freshop.com/1564405684702504551/e6453ddfbab4c588179a6663b6cc2dcc_large.png" },
  { Name: "Noodles", Price: 15, Quantity: 0, Inventory: 13, imgSrc: "https://shopsuki.ph/cdn/shop/products/4807770270024_1_1024x.jpg?v=1676602017" },
  { Name: "3 in 1 Coffee", Price: 15, Quantity: 0, Inventory: 5, imgSrc: "https://primomart.ph/cdn/shop/products/Nescafe_20Blend_26Brew_20Original_2028g-FRONT_0_508x691.png?v=1592748661" },
  { Name: "Tang", Price: 30, Quantity: 0, Inventory: 18, imgSrc: "data:image/jpeg;base64,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" },
  { Name: "Piatos", Price: 15, Quantity: 0, Inventory: 12, imgSrc: "https://www.sarapnow.com/cdn/shop/products/jack-n-jill-chips-jack-n-jill-piattos-cheese-flavored-potato-chips-546219884588.jpg?v=1648782074" },
]);



const incrementItem = (item) => {
  if (item.Inventory > item.Quantity) {
    item.Quantity += 1;
  } else {
    // Optionally handle cases where the inventory limit is reached
    console.log("Cannot add more. Inventory limit reached.");
  }
}

const decrementItem = (item) => {
  if (item.Quantity > 0) {
    item.Quantity -= 1;
  }
}


const getTotal = () => {
  let totalPrice = 0;
  for (const item of itemList.value) {
    totalPrice += item.Quantity * item.Price;
  }
  return totalPrice;
}

const getTotalHistory = (index) => {
  let totalPrice = 0;
  const itemsBought = history.value[index].ItemsBought;

  for (const item of itemsBought) {
    totalPrice += item.Quantity * item.Price;
  }

  return totalPrice;
};


const history = ref([]);

const addToHistory = () => {
  const currentDate = getCurrentDate();

  const itemsToPush = itemList.value.filter(item => item.Quantity > 0);

  if (itemsToPush.length > 0) {
    const itemsCopy = itemsToPush.map(item => ({ ...item }));

    // Update inventory based on items added to history
    for (const item of itemsCopy) {
      const originalItem = itemList.value.find(i => i.Name === item.Name);
      if (originalItem) {
        originalItem.Inventory -= item.Quantity; // Deduct the purchased quantity from inventory
      }
    }

    history.value.push({
      Date: currentDate,
      ItemsBought: itemsCopy,
    });

    clearCart();
  }
};


const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};


const clearCart = () => {
  for (const item of itemList.value) {
    item.Quantity = 0;
  }
}



  const imageUrl = ref('');
  const foodName = ref('');
  const foodPrice = ref(0);
  const foodQuantity = ref(0);
  

  const addItem = () => {
    const newItem = {
      Name: foodName.value,
      Price: foodPrice.value,
      Quantity: 0,
      Inventory: foodQuantity.value,
      imgSrc: imageUrl.value,
    };

    itemList.value.push(newItem);

    // Clear input fields after adding item
    imageUrl.value = '';
    foodName.value = '';
    foodPrice.value = 0;
    foodQuantity.value = 0;
  };

  const searchBar = ref('');




</script>

<template>
  <div v-if="screen.value == 'login'" class="loginScreen">


    <!-- LOGIN TITLE -->
    <div class="loginTitle">
      <h1>Profit Pulse</h1>
      <h2>Simplify and</h2>
      <h2>Accelerate Your</h2>
      <h2>Business Management</h2>
    </div>

    <!-- LOGIN BOX -->
    <div class="loginBox">

      <input type="text" placeholder="username" class="inputText" id="userName">
      <input type="password" placeholder="password" class="inputText" id="userPass">

      <div style="display: flex;">
        <input type="button" value="Login" style="flex: 1;" class="inputButton" @click="checkLogin()" id="userLogin">
        <input type="button" value="Signup" style="flex: 1;" class="inputButton" @click="switchScreen('main')">
      </div>

    </div>



  </div>

  <div v-else-if="screen.value == 'main'" class="mainScreen" style="display: flex; justify-content: space-between;">
    <div class="sidebar">
      <div class="icon "> <span class="pi pi-cart-plus" @click="switchScreen('main')"></span> </div>
      <div class="icon"> <span class="pi pi-box" @click="switchScreen('inventory')"></span> </div>
      <div class="icon"> <span class="pi pi-clock" @click="switchScreen('history')"></span> </div>
    </div>

    <div style="flex-direction: column;flex: 1; margin-right: 15px;">
      <h2>Main</h2>

      <div style="display: flex; flex-direction: row;">
      <input type="text" placeholder="Search Item" class="searchBar" style="width: 100%;" v-model="searchBar">
      <!-- <Button class="searchButton" @click="search == searchBar.value" icon="pi pi-search"></Button> -->
    </div>

      <!-- Center Items -->
      <div style="margin-top: 15px; display: flex; flex-wrap: wrap; height: 75vh; overflow-y: scroll;">

        <div v-for="(item, index) in itemList" :key="index">
          <div class="mainItem" v-if="item.Inventory > 0 && (item.Name==searchBar || searchBar == '')">

            <img :src="item.imgSrc" alt="" class="mainItemImg">
            <p> {{ item.Name }} </p>
            <p> P {{ item.Price }} </p>

            <div style="display: flex; justify-content: space-between;">
              <Button icon="pi pi-minus" class="inputButton" @click="decrementItem(item)"></Button>
              <p> {{ item.Quantity }} / {{ item.Inventory }}</p>
              <Button icon="pi pi-plus" class="inputButton" @click="incrementItem(item)"></Button>
            </div>
          </div>
        </div>


      </div>


    </div>

    <!-- Right Items -->
    <div class="" style="display: flex; flex-direction: column; width: 250px;">
      <h2>Items</h2>
      <div class="itemItemContainer">
        <div v-for="(item, index) in itemList" :key="item">
          <div v-if="item.Quantity > 0" class="itemItem">
            <img :src="item.imgSrc" alt="" class="itemItemImg">
            <div>
              <p style="margin: 0;"> {{ item.Name }} x{{ item.Quantity }}</p>
              <p style="margin: 0;"> P{{ item.Price * item.Quantity }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Total Price -->
      <div class="total">

        <h3>Total Amount</h3>
        <h2>P {{ getTotal() }}</h2>

        <Button label="Proceed" class="totalButton" @click="addToHistory()" />
        <Button label="Cancel" class="totalButton" @click="clearCart()" />

      </div>

    </div>



  </div>

  <div v-else-if="screen.value == 'history'" style="display: flex;">
    <div class="sidebar">
      <div class="icon "> <span class="pi pi-cart-plus" @click="switchScreen('main')"></span> </div>
      <div class="icon"> <span class="pi pi-box" @click="switchScreen('inventory')"></span> </div>
      <div class="icon"> <span class="pi pi-clock" @click="switchScreen('history')"></span> </div>
    </div>

    <div style="display: flex; flex-direction: column; width: 100%; margin-right: 75px;">
      <h2>History</h2>
      <div class="historyContainer">
        <div v-for="(items, index) in history" :key="index">

          <h2>{{ items.Date }}</h2>

          <div v-for="(items2, index2) in items.ItemsBought" :key="index2">
            <div class="historyItem">
              <p style="width: 70%;">{{ items2.Name }}</p>
              <p style="width: auto;">Quantity: {{ items2.Quantity }}</p>
              <p style="width: auto;">Price: P{{ items2.Price }}</p>
            </div>
          </div>

          <div style="text-align: right;">
            <h3>Total: P{{ getTotalHistory(index) }}</h3>
          </div>
          <div class="line"></div>
        </div>
      </div>
    </div>


  </div>

  <div v-else-if="screen.value == 'inventory'" style="display: flex;">
    <div class="sidebar">
      <div class="icon "> <span class="pi pi-cart-plus" @click="switchScreen('main')"></span> </div>
      <div class="icon"> <span class="pi pi-box" @click="switchScreen('inventory')"></span> </div>
      <div class="icon"> <span class="pi pi-clock" @click="switchScreen('history')"></span> </div>
    </div>

    <div style="width: 100%; margin-right: 90px;">
      <h2>Inventory</h2>
      <div class="inventoryContainer">
        <div v-for="(item, index) in itemList" :key="index">
          <div style="display: flex; width: 100%;" class="inventoryItem">
            <p style="width: 70%;">{{ item.Name }}</p>
            <p style="width: auto;">Stock: {{ item.Inventory }}</p>
            <p style="width: auto;">Price: P{{ item.Price }}</p>
          </div>
        </div>
      </div>
      <Button label="Add Product" class="addProductButton" @click="switchScreen('addproduct')"></Button>
    </div>
  </div>

  <div v-else-if="screen.value == 'addproduct'" style="display: flex;">
    <div class="sidebar">
      <div class="icon "> <span class="pi pi-cart-plus" @click="switchScreen('main')"></span> </div>
      <div class="icon"> <span class="pi pi-box" @click="switchScreen('inventory')"></span> </div>
      <div class="icon"> <span class="pi pi-clock" @click="switchScreen('history')"></span> </div>
    </div>
    

    <div style="display: flex; flex-direction: column;">
      <h2>Add Product</h2>

      <div class="addProductContainer">
        <p>Enter Image address</p>
        <input type="text" v-model="imageUrl">
      
        <p>Enter Food Name</p>
        <input type="text" v-model="foodName" id="foodName">

        <p>Enter Food Price</p>
        <input type="number" v-model="foodPrice" id="foodPrice">

        <p>Enter Food Quantity</p>
        <input type="number" v-model="foodQuantity" id="foodQuantity" >

        <img v-if="imageUrl" :src="imageUrl" alt="Stored Image" style="width: 300px; height: 300px; border-radius: 10px;" class="addProductImg">
        <button @click="addItem">Add Item</button>
      </div>
    </div>


  </div>
</template>



<style scoped>
/* Icon */
.icon {
  font-size: 30px;
  border-radius: 5px;
  color: white;

  width: 50px;
  height: 50px;

  margin: 30px auto;
  margin-bottom: 0;

  display: flex;
  justify-content: center;
  place-items: center;
}

.icon:hover {
  background-color: white;
  color: #0246a0;
}

.icon:active {
  transform: scale(75%);
}

/* Font Size */

h1 {
  font-size: 60px;
}

h2 {
  font-size: 30px;
}

p,
.inputText,
.inputButton {
  font-size: 15px;
}

/* Inputs */

.searchBar {
  padding: 15px;
  border-radius: 15px;
  border: 1px solid gray;
  outline: none;
  margin-right: 15px;
}

.searchButton {
  width: 45px;
  border-radius: 15px;
  border: none;
  background-color: #0246a0;
  color: white;
}

.inputText {
  padding: 10px;
  border: none;
  margin: 5px;
  border-radius: 3px;
}

.inputText:focus {
  outline: none;
  border: 1px solid white;
}

.inputButton {
  color: #0246a0;
  padding: 10px;
  border: none;
  margin: 5px;
  border-radius: 3px;
}

.inputButton:active {
  transform: scale(75%);
}

.totalButton {
  background-color: #0246a0;
  color: white;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 5px;
  margin: 0 15px;
}

.totalButton:active {
  transform: scale(75%);
}

.addProductButton {
  background-color: #0246a0;
  color: white;
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 5px;
  margin: 15px;
  margin-left: 0;
}

.addProductButton:active {
  transform: scale(75%);
}

/* Login Screen */
.loginScreen {
  display: flex;
  place-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: min(90%, max(750px, 50%));
  height: 100vh;
}

.loginTitle {
  background-color: transparent;
}

.loginBox {
  background-color: #0246a0;
  padding: 25px;
  border-radius: 5px;
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  place-content: center;
}

/* Sidebar */

.sidebar {
  background-color: #0246a0;
  width: 125px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 15px;
}

/* Main */

.mainItem {
  background-color: #0246a0;
  width: 150px;
  height: 275px;
  border-radius: 15px;
  padding: 15px;
  color: white;
  margin: 5px;
  font-weight: bold;
}

.mainItemImg {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: white;
}

.itemItemContainer {
  height: 60vh;
  overflow-y: scroll;
  padding: 15px;
}

.itemItemImg {
  width: 50px;
  height: 50px;
  background-color: yellow;
  border-radius: 5px;
  margin-right: 15px;
}

.itemItem {
  display: flex;
  margin: 5px;
}

.total {
  text-align: center;
}

.historyContainer {
  background-color: #cce1fc;
  width: 100%;
  height: 75vh;
  overflow-y: auto;
  padding: 30px;
  border-radius: 10px;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #0246a0;
  border-radius: 5px;
}

.historyItem {
  display: flex;
  justify-content: space-between;
  background-color: #b2d2fc;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
}

.inventoryContainer {
  background-color: #cce1fc;
  width: 100%;
  height: 70vh;
  overflow-y: auto;
  padding: 30px;
  border-radius: 10px;
  padding-right: 45px;
}

.inventoryItem {
  display: flex;
  justify-content: space-between;
  background-color: #b2d2fc;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
}

.addProductContainer {
  display: flex;
  flex-direction: column;
}

.addProductContainer > p {
  margin-bottom: 5px;
}

.addProductContainer > input {
  border: 1px solid #0246a0;
  padding: 5px;
  border-radius: 10px;
}

.addProductContainer > button {
  margin-top: 15px;
  border: 1px solid #0246a0;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
}

.addProductImg {
  border: 1px solid #0246a0;
  border-radius: 10px;
  margin: 15px;
}

</style>


