function selectModel(model) {
  const summary = document.getElementById('order-summary');
  summary.innerHTML = `
    <p style="background: #2e2e2e; color: #00ff66; padding: 10px; text-align: center;">
      ✅ Anda memilih: <strong>${model}</strong>
    </p>`;

  const tombol = document.getElementById('lanjutBtn');
  tombol.style.display = 'inline-block';

  localStorage.setItem('modelTerpilih', model);

  // 🔥 Tambahkan efek visual
  const semuaModel = document.querySelectorAll('.model');
  semuaModel.forEach(el => el.classList.remove('selected'));

  // Cari elemen .model yang mengandung teks sesuai model
  semuaModel.forEach(el => {
    const teks = el.textContent.trim().toLowerCase();
    if (teks.includes(model.toLowerCase())) {
      el.classList.add('selected');
    }
  });
}

function lanjutKeRequest() {
  window.location.href = "request.html";
}
