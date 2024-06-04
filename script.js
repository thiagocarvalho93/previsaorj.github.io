document.addEventListener("DOMContentLoaded", function () {
  const forecastImage = document.getElementById("forecast-image");
  const changeImageBtn = document.getElementById("change-image-btn");

  let currentImageIndex = 0;
  const imageSources = ["./assets/previsao.png"];

  loadForecastImage();

  changeImageBtn.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    loadForecastImage();
  });

  function loadForecastImage() {
    forecastImage.src = imageSources[currentImageIndex];
  }
});
