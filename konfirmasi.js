document.addEventListener("DOMContentLoaded", function () {
  const model = localStorage.getItem("modelTerpilih");
  const modelEl = document.getElementById("modelTerpilih");

  if (model) {
    modelEl.textContent = `Model rambut yang Anda pilih: ${model}`;
  } else {
    modelEl.textContent = "Model rambut belum dipilih.";
  }
});
