// cart.js
// cart.js

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const currentStock = getProductStock(product.id);

  if (currentStock <= 0) {
    alert("Sorry, this product is out of stock.");
    return;
  }

  const cart = getCart();
  const existing = cart.find(item => String(item.id) === String(product.id));

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: String(product.id),
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  decreaseProductStock(product.id, 1);

  if (typeof renderStockStatus === "function") {
    renderStockStatus();
  }

  alert(product.name + " added to cart.");
}
function updateCartQuantity(productId, newQuantity) {
  const cart = getCart();
  const item = cart.find(product => product.id === productId);

  if (!item) return;

  if (newQuantity <= 0) {
    removeCartItem(productId);
    return;
  }

  const stock = getProductStock(productId);
  if (newQuantity > stock) {
    alert("Only " + stock + " item(s) available in stock.");
    item.quantity = stock;
    saveCart(cart);
    return;
  }

  item.quantity = newQuantity;
  saveCart(cart);
}

function removeCartItem(productId) {
  const updatedCart = getCart().filter(item => item.id !== productId);
  saveCart(updatedCart);
}

function clearCartData() {
  localStorage.removeItem("cart");
}

function getCartSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getShippingFee(subtotal) {
  if (subtotal === 0) return 0;
  if (subtotal >= 100) return 0;
  return 5;
}

function getDiscount(subtotal) {
  if (subtotal >= 150) return 10;
  return 0;
}