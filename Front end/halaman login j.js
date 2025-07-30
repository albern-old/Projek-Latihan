document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const name = document.getElementById("nameInput").value;
  const resultDiv = document.getElementById("result");

  if (name.trim()) {
    resultDiv.textContent = `Halo, ${name}! Selamat datang King.`;
  } else {
    resultDiv.textContent = "Nama Salah uy.";
  }
});