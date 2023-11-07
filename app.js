const cratcontainer = document.getElementById("cartcontainer");
console.log(cratcontainer);
const cartTotal = document.getElementById("total");
let cartItems = [
  {
    productID: "product-1",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/1383311/1.jpg?9191",
    productname: "Oraimo 10000mah power-Bank OPB-P118D",
    seller: "Oraimo original",
    productprice: 9000,
    ProductQuantity: 1,
    like: false,
  },
  {
    productID: "product-2",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/2541122/1.jpg?1367",
    productname: "Oraimo blender",
    seller: "Oraimo original",
    productprice: 2000,
    ProductQuantity: 1,
    like: false,
  },
  {
    productID: "product-3",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/6146232/1.jpg?7334",
    productname: "Oraimo clipper",
    seller: "Oraimo original",
    productprice: 3000,
    ProductQuantity: 1,
    like: false,
  },
  {
    productID: "product-4",
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/4712052/1.jpg?4973",
    productname: "Oraimo cord",
    seller: "Oraimo original",
    productprice: 3000,
    ProductQuantity: 1,
    like: false,
  },
];

let totalcostOfItemsIncart;
//  display function for our carts
function displaycarItems() {
  let currencyDisplay = Intl.NumberFormat("en-US");
  // step one map
  cartcontainer.innerHTML = cartItems
    .map((item) => {
      return ` <div class="single--product d-flex justify-content-start p-3">
        <!-- product image -->
        <img
          src="${item.productImage}"
          alt=""
          class="product-image"
        />
        <!-- ----------------------------- -->

        <div class="product--information w-100">
          <h3 class="product--title">${item.productname}</h3>
          <p class="product--amount">&#8358; ${currencyDisplay.format(
            item.productprice
          )}</p>

         
          <!-- product quantity -->
          <div class="d-flex justify-content-between align-items-baseline  w-100 flex-wrap">
                        <div><button class="btn-minus" onclick=decreaseQuantity('${
                          item.productID
                        }')>-</button><span>${
        item.ProductQuantity
      }</span><button class="btn-plus" onclick=increaseQuantity('${
        item.productID
      }')>+</button>
                            </div>

      <!-- -------remove buttons---------- -->
                            <div>
      <button onclick=removeItemFromCart('${
        item.productID
      }') class="remove--item">remove</button>




      <button onclick=pudateProductlikeness('${
        item.productID
      }') class='like-item--btn'>
      ${
        item.like === true
          ? `<i class="fa-solid fa-heart" style="color: #ff2b05;"></i>`
          : `<i class="fa-regular fa-heart" style="color: #1f1a1a;"></i>`
      }
          </button>
                            </div>
          
          </div>
          
      
        <!-- ----------------- -->
        </div>
      </div>`;
    })
    .join("");
}
displaycarItems();
calculateCartTotal();

// increace quantity function

function increaseQuantity(id) {
  cartItems.forEach((item) => {
    if (item.productID === id) {
      item.ProductQuantity = item.ProductQuantity + 1;
    }
  });

  displaycarItems();
  calculateCartTotal();
}

//   to decrease Quantity

function decreaseQuantity(id) {
  cartItems.forEach((item) => {
    if (item.ProductQuantity === 1) {
      return;
    }
    if (item.productID === id) {
      item.ProductQuantity = item.ProductQuantity - 1;
    }
  });

  displaycarItems();
  calculateCartTotal();
}

function removeItemFromCart(id) {
  cartItems = cartItems.filter((item) => item.productID !== id);
  console.log(cartItems);

  displaycarItems();
  calculateCartTotal();
  return cartItems;
}
function calculateCartTotal() {
  let totalcostOfItemsIncart = cartItems.reduce((total, value) => {
    console.log(total);
    return total + value.ProductQuantity * value.productprice;
  }, 0);
  cartTotal.textContent = totalcostOfItemsIncart;
}
calculateCartTotal();

function pudateProductlikeness(id) {
  cartItems.forEach((item) => {
    if (item.productID === id && item.like === false) {
      item.like = true;
    } else if (item.productID === id && item.like === true) {
      item.like = false;
    }
  });

  displaycarItems();
}

checkoutBtn.addEventlistener("click", proceedTocheck);
function proceedTocheck(params) {
  console.log(cartItems, totalcostOfItemsIncart);
}
