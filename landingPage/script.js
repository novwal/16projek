const inputForm = document.getElementById('inputForm');
const resultGambar = document.getElementById('resultGambar');
const resultNamaPlanet = document.getElementById('resultNamaPlanet');
const resultPlanet = document.getElementById('resultPlanet');
const resultPenjelasan = document.getElementById('resultPenjelasan');

inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const namaPlanet = document.getElementById('namaPlanet').value;
    const ukuranPlanet = document.getElementById('ukuranPlanet').value;
    const gambarPlanet = document.getElementById('gambarPlanet').files[0];
    const penjelasanPlanet = document.getElementById('penjelasanPlanet').value;

    resultNamaPlanet.textContent = `Nama Planet: ${namaPlanet}`;
    resultPlanet.textContent = `Ukuran Planet: ${ukuranPlanet}`;
    resultPenjelasan.textContent = `Penjelasan Planet: ${penjelasanPlanet}`;

    if (gambarPlanet) {
        const reader = new FileReader();
        reader.onload = function (event) {
            resultGambar.src = event.target.result;
        };
        reader.readAsDataURL(gambarPlanet);
    } else {
        resultGambar.src = '';
    }

    // Kosongkan kolom input
    inputForm.reset();
});
