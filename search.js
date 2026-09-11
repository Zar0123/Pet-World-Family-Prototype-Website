// search.js

function getPageSearchKey() {
  const path = window.location.pathname; // e.g. /grooming_product.html
  const file = path.split("/").pop() || "index.html";
  return "searchKeyword_" + file;
}

function setupPageSearch() {
  const searchInput = document.getElementById("globalSearch");
  const cards = document.querySelectorAll(".searchable-product");

  if (!searchInput || cards.length === 0) return;

  const storageKey = getPageSearchKey();
  const savedKeyword = localStorage.getItem(storageKey) || "";
  searchInput.value = savedKeyword;
  filterPageCards(savedKeyword, cards);

  searchInput.addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();
    localStorage.setItem(storageKey, keyword);
    filterPageCards(keyword, cards);
  });
}

function filterPageCards(keyword, cards) {
  const normalized = (keyword || "").toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (!normalized || text.includes(normalized)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function searchProducts(event) {
  if (event) event.preventDefault();

  const searchInput = document.getElementById("globalSearch");
  const cards = document.querySelectorAll(".searchable-product");

  if (!searchInput || cards.length === 0) return false;

  const storageKey = getPageSearchKey();
  const keyword = searchInput.value.trim().toLowerCase();

  localStorage.setItem(storageKey, keyword);
  filterPageCards(keyword, cards);

  return false;
}

// search.js

function setupPageSearch() {
  const form = document.querySelector(".home-search-form");
  if (!form) return;

  form.addEventListener("submit", searchProducts);
}

function searchProducts(event) {
  event.preventDefault();
  const input = document.getElementById("globalSearch");
  if (!input) return;

  const term = input.value.trim().toLowerCase();
  const products = document.querySelectorAll(".searchable-product");

  products.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? "" : "none";
  });

  return false;
}