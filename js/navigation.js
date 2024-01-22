function openNav() {
  document.querySelector("#header__menu").style.width = "100vw";
}
function closeNav() {
  document.querySelector("#header__menu").style.width = "0";
}

document.querySelector("#closeMenu").addEventListener("click", closeNav);
document.querySelector("#openNav").addEventListener("click", openNav);


/* Email addition */
    document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        fetch('https://script.google.com/macros/s/AKfycbz8opymOR3-JqcsmpyLx0nUoXNV9pDDn-ebzFx_FoXZQQqbB9gBdwnWBexCugb7IzYbMg/exec', { 
            method: 'POST', 
            body: formData 
        }).then(response => response.text())
        .then(data => alert("Повідомлення відправлено!"))
        .catch(error => alert("Сталася помилка: " + error));
    });

    