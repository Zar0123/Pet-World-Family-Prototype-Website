function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
}

function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true" && getCurrentUser() !== null;
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}

function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);
  const icon = button.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function renderNavbarAuth() {
  const navAuthArea = document.getElementById("navAuthArea");
  if (!navAuthArea) return;

  const user = getCurrentUser();

  if (!isLoggedIn()) {
    navAuthArea.innerHTML = `
      <a href="chart.html" class="text-decoration-none me-3 fs-5">
        <i class="fa-solid fa-cart-arrow-down" style="color:#a12d42;"></i>
      </a>
      <a href="login.html" class="btn btn-sm rounded-pill px-3 auth-login-btn">
        <i class="fa-regular fa-user me-1"></i> Login
      </a>
    `;
    return;
  }

  const firstName = user.name ? user.name.split(" ")[0] : "Account";

  navAuthArea.innerHTML = `
    <a href="chart.html" class="text-decoration-none me-3 fs-5">
      <i class="fa-solid fa-cart-arrow-down" style="color:#a12d42;"></i>
    </a>

    <div class="dropdown">
      <button
        class="btn btn-sm rounded-pill px-3 d-flex align-items-center auth-profile-btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="auth-profile-icon">
          <i class="fa-regular fa-user"></i>
        </span>
        <span class="d-none d-md-inline">${firstName}</span>
        <i class="fa-solid fa-chevron-down ms-2 small d-none d-md-inline"></i>
      </button>

      <ul class="dropdown-menu dropdown-menu-end shadow-sm auth-dropdown-menu">
        <li>
          <a class="dropdown-item" href="customer_account.html">
            <i class="fa-regular fa-id-card me-2"></i> My Account
          </a>
        </li>
        <li>
          <button class="dropdown-item text-danger" type="button" onclick="logoutUser()">
            <i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  `;
}
function requireLogin(redirectPage = "login.html") {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!loggedIn || !currentUser) {
    alert("Please login first to continue.");
    window.location.href = redirectPage;
    return false;
  }

  return true;
}