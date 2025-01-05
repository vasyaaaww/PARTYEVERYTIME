console.log("Script loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {
    const locationButton = document.getElementById("locationButton");
    if (locationButton) {
        locationButton.addEventListener("click", function () {
            // Mengalihkan pengguna ke Google Maps
            window.location.href = 'https://maps.app.goo.gl/CKjF6rK5BU7aY1Cm9?g_st=com.google.maps.preview.copy';
        });
    }
});
