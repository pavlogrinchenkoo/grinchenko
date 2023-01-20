let sandwichmenu = document.getElementById('sandwichmenu');
let box = document.getElementById('menubox');
var a = document.getElementsByClassName('menu__item');
// var items = document.getElementsByClassName('burger__menu-item');

document.getElementById('sandwichmenu').onclick = function() {
  sandwichmenu.classList.toggle('active');
  box.classList.toggle('active');
}

for (var i = 0; i < a.length; i++) {
  a[i].addEventListener('click', function () {
    sandwichmenu.classList.remove('active');
    box.classList.remove('active');
  });
}

// for (var i = 0; i < a.length; i++) {
//   a[i].addEventListener('click', function () {
//     sandwichmenu.classList.remove('active');
//     box.classList.remove('active');
//   });
// }