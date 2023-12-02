// Fetch product data from a JSON file
const productsPromise = fetch("products.json")
  .then((response) => response.json())
  .then((data) => data);

// Function to display products
function displayProducts(data) {
  const productList = document.querySelector(".product-list");

  for (const product of data) {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="add-to-cart" data-product-id="${
        product.id
      }">Add to Cart</button>
    `;

    productList.appendChild(productElement);
  }
}

// Display products on page load
productsPromise.then(displayProducts);

// Cart items array to store added products
const cartItems = [];

// Function to update the cart and display items
function updateCart() {
  const cartItemsElement = document.querySelector(".cart-items");
  cartItemsElement.innerHTML = "";

  let total = 0;

  for (const cartItem of cartItems) {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    cartItemElement.innerHTML = `
      <img src="${cartItem.image}" alt="${cartItem.name}">
      <h4>${cartItem.name}</h4>
      <p>Price: $${cartItem.price.toFixed(2)}</p>
      <button class="remove-from-cart" data-product-id="${
        cartItem.id
      }">Remove</button>
    `;

    cartItemsElement.appendChild(cartItemElement);

    total += cartItem.price;
  }

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Event listener for adding products to cart
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("add-to-cart")) {
    const productId = target.getAttribute("data-product-id");
    productsPromise.then((data) => {
      const productToAdd = data.find((product) => product.id === productId);
      if (productToAdd) {
        cartItems.push(productToAdd);
        updateCart();
      }
    });
  }
});

// Rest of your code for removing items from the cart remains unchanged.
