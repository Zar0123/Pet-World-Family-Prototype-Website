// inventory.js

// Master product list for all pages
const INVENTORY = [
  // Home featured products
  {
    id: "1",
    name: "Premium Dog Food",
    price: 25,
    image: "images/premium_dog_food.jpg",
    stock: 20,
    restockDate: "May 15"
  },
  {
    id: "2",
    name: "Cat Toy Set",
    price: 15,
    image: "images/cat_toyset.avif",
    stock: 15,
    restockDate: "May 20"
  },
  {
    id: "3",
    name: "Soft Pet Bed",
    price: 30,
    image: "images/soft_pet_bed.webp",
    stock: 10,
    restockDate: "June 1"
  },
  {
    id: "4",
    name: "Pet Shampoo",
    price: 12,
    image: "images/pet_shampoo.webp",
    stock: 12,
    restockDate: "May 28"
  },

  // Grooming products (5–13)
  {
    id: "5",
    name: "OurDogsLife Shampoo & Conditioner",
    price: 10.00,
    image: "images/pet_gp1.webp",
    stock: 6,
    restockDate: "May 18"
  },
  {
    id: "6",
    name: "Medium Silicone Brush",
    price: 19.00,
    image: "images/pet_gp2.webp",
    stock: 5,
    restockDate: "May 22"
  },
  {
    id: "7",
    name: "Shorthair Grooming Kit",
    price: 80.90,
    image: "images/pet_pg3.webp",
    stock: 3,
    restockDate: "May 25"
  },
  {
    id: "8",
    name: "Grooming Ear Powder",
    price: 43.15,
    image: "images/pet_pg4.webp",
    stock: 0,
    restockDate: "End of May"
  },
  {
    id: "9",
    name: "Grooming Forceps Straight",
    price: 12.60,
    image: "images/pet_pg5.webp",
    stock: 7,
    restockDate: "May 20"
  },
  {
    id: "10",
    name: "Scented Grooming Wipes",
    price: 13.00,
    image: "images/pet_pg6.webp",
    stock: 4,
    restockDate: "May 24"
  },
  {
    id: "11",
    name: "Dog Collagen+ Care 400ml",
    price: 5.80,
    image: "images/pet_pg7.webp",
    stock: 2,
    restockDate: "May 28"
  },
  {
    id: "12",
    name: "SPA Cleansing Glove",
    price: 1.00,
    image: "images/pet_pg8.webp",
    stock: 9,
    restockDate: "June 1"
  },
  {
    id: "13",
    name: "Hypo-Allergenic Cat Grooming Foam",
    price: 13.95,
    image: "images/pet_pg9.webp",
    stock: 1,
    restockDate: "June 3"
  },

  // Pet accessories (14–22)
  {
    id: "14",
    name: "Pet Leash",
    price: 18,
    image: "images/pet_ap1.webp",
    stock: 10,
    restockDate: "Next Week"
  },
  {
    id: "15",
    name: "Soft Pet Bed",
    price: 134.30,
    image: "images/pet_ap2.webp",
    stock: 5,
    restockDate: "Next Week"
  },
  {
    id: "16",
    name: "Backpack Trolley Bag",
    price: 89,
    image: "images/pet_ap3.webp",
    stock: 3,
    restockDate: "Next Week"
  },
  {
    id: "17",
    name: "Fur Removal Brush",
    price: 10.70,
    image: "images/pet_ap4.webp",
    stock: 9,
    restockDate: "Next Week"
  },
  {
    id: "18",
    name: "Cat Scratcher Bed Oval",
    price: 11.60,
    image: "images/pet_ap5.webp",
    stock: 8,
    restockDate: "Next Week"
  },
  {
    id: "19",
    name: "Wooden Ladder",
    price: 4.40,
    image: "images/pet_ap6.webp",
    stock: 12,
    restockDate: "Next Week"
  },
  {
    id: "20",
    name: "8-Shaped Cat Scratcher",
    price: 69.30,
    image: "images/pet_ap7.webp",
    stock: 2,
    restockDate: "Next Week"
  },
  {
    id: "21",
    name: "Cat Scratch Board – Fish Blue",
    price: 8.90,
    image: "images/pet_ap8.webp",
    stock: 7,
    restockDate: "Next Week"
  },
  {
    id: "22",
    name: "Pet Soft Mat",
    price: 45.60,
    image: "images/pet_ap9.webp",
    stock: 4,
    restockDate: "Next Week"
  },

  // Pet food products (23–31)
  {
    id: "23",
    name: "Beef Puppy Meal",
    price: 10.00,
    image: "images/pet_product_img.webp",
    stock: 14,
    restockDate: "May 14"
  },
  {
    id: "24",
    name: "Pork Adult Recipe",
    price: 2.65,
    image: "images/pet_product_2.webp",
    stock: 10,
    restockDate: "May 18"
  },
  {
    id: "25",
    name: "Mushroom Broth",
    price: 8.50,
    image: "images/pet_product_3.webp",
    stock: 9,
    restockDate: "May 25"
  },
  {
    id: "26",
    name: "Beef & Duck Kitten",
    price: 11.25,
    image: "images/pet_product_4.png",
    stock: 6,
    restockDate: "May 30"
  },
  {
    id: "27",
    name: "Chicken & Duck Senior",
    price: 11.00,
    image: "images/pet_product_5.webp",
    stock: 5,
    restockDate: "June 3"
  },
  {
    id: "28",
    name: "Digestive Aid Supplement",
    price: 29.00,
    image: "images/pet_product-6.webp",
    stock: 11,
    restockDate: "May 20"
  },
  {
    id: "29",
    name: "Emas 10 3‑in‑1",
    price: 5.80,
    image: "images/pet_product_7.webp",
    stock: 13,
    restockDate: "May 22"
  },
  {
    id: "30",
    name: "Roudybush Premium",
    price: 27.80,
    image: "images/pet_product_8.webp",
    stock: 4,
    restockDate: "May 28"
  },
  {
    id: "31",
    name: "Hikari Wheat Germ",
    price: 53.00,
    image: "images/pet_product_9.webp",
    stock: 6,
    restockDate: "End of May"
  },

  // Pet toys products (32–40)
  {
    id: "32",
    name: "Plush Banana Toy",
    price: 10.50,
    image: "images/pet_pp1.jpg",
    stock: 10,
    restockDate: "May 16"
  },
  {
    id: "33",
    name: "Rope Fetch Toy",
    price: 10.45,
    image: "images/pet_pp2.webp",
    stock: 8,
    restockDate: "May 20"
  },
  {
    id: "34",
    name: "Puppy Wishbone Chew",
    price: 6.30,
    image: "images/pet_pp3.webp",
    stock: 12,
    restockDate: "May 18"
  },
  {
    id: "35",
    name: "Squeaky Teeth Ball",
    price: 3.80,
    image: "images/pet_pp4.webp",
    stock: 9,
    restockDate: "May 25"
  },
  {
    id: "36",
    name: "Spring Mouse Toy",
    price: 13.00,
    image: "images/pet_pp5.webp",
    stock: 5,
    restockDate: "May 22"
  },
  {
    id: "37",
    name: "Sparkle Bone Plush",
    price: 12.75,
    image: "images/pet_pp6.webp",
    stock: 3,
    restockDate: "May 27"
  },
  {
    id: "38",
    name: "Rustling Dragonfly Toy",
    price: 5.35,
    image: "images/pet_pp7.webp",
    stock: 1,
    restockDate: "End of May"
  },
  {
    id: "39",
    name: "Zoozoo Lion Ball",
    price: 12.40,
    image: "images/pet_pp8.webp",
    stock: 8,
    restockDate: "June 1"
  },
  {
    id: "40",
    name: "Kong Tug Toy",
    price: 53.00,
    image: "images/pet_pp9.webp",
    stock: 0,
    restockDate: "June 5"
  },

  // Pets for Sale products (42–50)
  {
    id: "42",
    name: "Poodle",
    price: 1200,
    image: "images/poodle.avif",
    stock: 2,
    restockDate: "June 1"
  },
  {
    id: "43",
    name: "Shiba Inu",
    price: 1500,
    image: "images/shiba_Inu.avif",
    stock: 1,
    restockDate: "June 5"
  },
  {
    id: "44",
    name: "British Shorthair",
    price: 1000,
    image: "images/british_shorthair.avif",
    stock: 3,
    restockDate: "June 3"
  },
  {
    id: "45",
    name: "Persian Cat",
    price: 900,
    image: "images/persian_cat.avif",
    stock: 4,
    restockDate: "May 28"
  },
  {
    id: "46",
    name: "Mini Lop Rabbit",
    price: 1200,
    image: "images/rabbit.avif",
    stock: 2,
    restockDate: "June 7"
  },
  {
    id: "47",
    name: "Syrian Hamster",
    price: 25,
    image: "images/hamster.avif",
    stock: 5,
    restockDate: "May 30"
  },
  {
    id: "48",
    name: "Lovebird (Pair)",
    price: 180,
    image: "images/parrot.avif",
    stock: 3,
    restockDate: "June 2"
  },
  {
    id: "49",
    name: "Halfmoon Betta",
    price: 20,
    image: "images/betta_fish.avif",
    stock: 6,
    restockDate: "May 26"
  },
  {
    id: "50",
    name: "Red-Eared Slider",
    price: 50,
    image: "images/turtle.avif",
    stock: 0,
    restockDate: "June 10"
  }
];

// ---- stock helpers with localStorage ----

function findProductById(productId) {
  return INVENTORY.find(p => String(p.id) === String(productId)) || null;
}

function getStockStorage() {
  return JSON.parse(localStorage.getItem("productStock")) || {};
}

function saveStockStorage(stockData) {
  localStorage.setItem("productStock", JSON.stringify(stockData));
}

function initializeStockStorage() {
  const current = getStockStorage();
  if (Object.keys(current).length > 0) return;

  const stockData = {};
  INVENTORY.forEach(p => {
    stockData[p.id] = Number(p.stock);
  });
  saveStockStorage(stockData);
}

function getProductStock(productId) {
  const stockData = getStockStorage();
  const key = String(productId);

  if (stockData[key] !== undefined) {
    return Number(stockData[key]);
  }

  const product = findProductById(productId);
  return product ? Number(product.stock) : 0;
}

function setProductStock(productId, newStock) {
  const stockData = getStockStorage();
  stockData[String(productId)] = Math.max(0, Number(newStock));
  saveStockStorage(stockData);
}

function decreaseProductStock(productId, qty = 1) {
  const current = getProductStock(productId);
  setProductStock(productId, current - qty);
}

function increaseProductStock(productId, qty = 1) {
  const current = getProductStock(productId);
  setProductStock(productId, current + qty);
}

function getEstimatedRestockDate(productId) {
  const product = findProductById(productId);
  return product ? product.restockDate : null;
}