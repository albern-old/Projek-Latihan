const akunContoh = {
  email: "contoh@email.com",
  password: "123456"
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const messageBox = document.getElementById("loginMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if (email === akunContoh.email && password === akunContoh.password) {
      messageBox.textContent = "Login berhasil!";
      messageBox.className = "message success";
    } else {
      messageBox.textContent = "Email atau password salah!";
      messageBox.className = "message error";
    }
  });
});