```javascript
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value;

        alert(
            "Terima kasih, " + Ummar Shiddiq +
            "! Pesan Anda berhasil diterima."
        );

        contactForm.reset();
    });

});
```