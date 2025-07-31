document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("reg-username").value.trim();
      const password = document.getElementById("reg-password").value.trim();
      const registerErrorMessage = document.getElementById("register-error-message");

      if (!username || !password) {
        registerErrorMessage.textContent =
d    return;
      }

      if (localStorage.getItem(username)) {
        registerErrorMessage.textContent = "Username sudah terdaftar.";
        return;
      }

      const userData = { username, password };
      localStorage.setItem(username, JSON.stringify(userData));
      registerErrorMessage.textContent = "";
      alert(`Akun berhasil dibuat, ${username}!`);
      window.location.href = "login.html";
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMessage = document.getElementById("error-message");

      if (!username || !password) {
        errorMessage.textContent = "Username dan password tidak boleh kosong.";
        return;
      }

      const storedData = localStorage.getItem(username);
      if (!storedData) {
        errorMessage.textContent = "Akun tidak ditemukan.";
        return;
      }

      const parsedData = JSON.parse(storedData);
      if (username === parsedData.username && password === parsedData.password) {
        errorMessage.textContent = "";
        // Simpan status login
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
      } else {
        errorMessage.textContent = "Username atau password salah.";
      }
    });
  }

  if (window.location.pathname.endsWith("dashboard.html")) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      window.location.href = "login.html";
    } else {
      const headerTitle = document.querySelector(".dashboard-container header h1");
      if (headerTitle) {
        headerTitle.textContent = `Selamat datang, ${loggedInUser}!`;
      }
    }
  }
});

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
