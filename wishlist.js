const WISHLIST_KEY = "wishlistItems";

function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

function saveWishlist(items) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
}

function clearWishlist() {
  localStorage.removeItem(WISHLIST_KEY);
}

function isInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.some(item => String(item.id) === String(productId));
}

function addToWishlist(product) {
  if (!product || !product.id) return;

  const wishlist = getWishlist();
  const exists = wishlist.some(item => String(item.id) === String(product.id));

  if (!exists) {
    wishlist.push({
      id: String(product.id),
      name: product.name,
      price: Number(product.price),
      image: product.image
    });
    saveWishlist(wishlist);
  }
}

function removeFromWishlist(productId) {
  const wishlist = getWishlist().filter(
    item => String(item.id) !== String(productId)
  );
  saveWishlist(wishlist);
}

function toggleWishlist(product) {
  if (!product || !product.id) return;

  if (isInWishlist(product.id)) {
    removeFromWishlist(product.id);
  } else {
    addToWishlist(product);
  }
}

function updateWishlistNavCount() {
  const countEls = document.querySelectorAll("[data-wishlist-count]");
  const count = getWishlist().length;

  countEls.forEach(el => {
    el.textContent = count;
  });
}

function updateWishlistButtons() {
  const buttons = document.querySelectorAll(".wishlist-btn-icon");

  buttons.forEach(button => {
    const id = button.dataset.wishlistId;
    const icon = button.querySelector("i");

    if (!id || !icon) return;

    if (isInWishlist(id)) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }
  });
}

function getWishlistProductFromButton(buttonEl) {
  if (!buttonEl) return null;

  return {
    id: buttonEl.dataset.wishlistId,
    name: buttonEl.dataset.wishlistName,
    price: buttonEl.dataset.wishlistPrice,
    image: buttonEl.dataset.wishlistImage
  };
}

function handleWishlistButtonClick(buttonEl, product = null) {
  const finalProduct = product || getWishlistProductFromButton(buttonEl);

  if (!finalProduct || !finalProduct.id) return;

  toggleWishlist(finalProduct);
  updateWishlistButtons();
  updateWishlistNavCount();
}

document.addEventListener("DOMContentLoaded", function () {
  updateWishlistButtons();
  updateWishlistNavCount();
});