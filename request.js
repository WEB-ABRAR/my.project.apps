document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah reload halaman

  // Ambil nilai dari form
  const tanggal = document.getElementById("tanggal").value;
  const jam = document.getElementById("jam").value;
  const catatan = document.getElementById("catatan").value;

  // Simpan ke localStorage agar bisa ditampilkan di profil.html
  localStorage.setItem("reqTanggal", tanggal);
  localStorage.setItem("reqJam", jam);
  localStorage.setItem("reqCatatan", catatan);

  // Arahkan ke halaman konfirmasi
  window.location.href = "konfirmasi.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const model = localStorage.getItem("modelTerpilih");
  const tampil = document.getElementById("model-terpilih");

  if (model) {
    tampil.innerHTML = `Model rambut yang Anda pilih: <strong>${model}</strong>`;
  } else {
    tampil.innerHTML = "❗ Anda belum memilih model rambut.";
  }
});
