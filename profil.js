document.getElementById('photo-input').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('profile-photo').src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

function resetPassword() {
  alert('Fitur reset password akan diarahkan ke halaman selanjutnya.');
  // Bisa diarahkan ke halaman reset password di sini
}

function logout() {
  const konfirmasi = confirm('Yakin ingin logout?');
  if (konfirmasi) {
    alert('Berhasil logout.');
    // Di sini bisa tambahkan redirect atau clear session
  }
}

// Ambil data request terakhir dari localStorage
document.addEventListener("DOMContentLoaded", function () {
  const model = localStorage.getItem("modelTerpilih") || "-";
  const tanggal = localStorage.getItem("reqTanggal") || "-";
  const jam = localStorage.getItem("reqJam") || "-";
  const catatan = localStorage.getItem("reqCatatan") || "-";

  document.getElementById("req-model").textContent = model;
  document.getElementById("req-tanggal").textContent = tanggal;
  document.getElementById("req-jam").textContent = jam;
  document.getElementById("req-catatan").textContent = catatan;
});

