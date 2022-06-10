
$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: false,
  arrows: false,
  dots: true,
  vertical: true,
  adaptiveHeight: false,
  speed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: false,
      },
    },
  ],
});


// $(".header-link").click(function () {
//   $(".header-link").removeClass("active");
//   $(this).addClass("active");
//   return false;
// });

// var menuItems = document.getElementsByClassName("header-link");
// var onClick = function (event) {
//   event.preventDefault();

//   for (var i = 0; i < menuItems.length; i++) {
//     menuItems[i].classList.remove("active");
//   }

//   event.currentTarget.classList.add("active");
// };

// for (var i = 0; i < menuItems.length; i++) {
//   menuItems[i].addEventListener("click", onClick, false);
// }

// window.addEventListener("load", function () {
//   var elem = document
//     .getElementsByClassName("header-link")[0]
//     .getElementsByTagName("a");
//   for (var i = 0; i < elem.length; i++)
//     elem[i].addEventListener("click", function () {
//       localStorage.setItem("a", this.textContent);
//     });
//   for (var i = 0; i < elem.length; i++)
//     if (elem[i].textContent == localStorage.getItem("a"))
//       elem[i].classList.add("active");
// });

// var navLink = $(".header-link").on("click", function (e) {
//   e.preventDefault();
//   navLink.not(this).removeClass("active");
//   $(this).addClass("active");
// });

// const list = document.querySelectorAll(".header-link");
// console.log(list)
// list.forEach(item => {
//   item.addEventListener('click', (e) => {
//     list.forEach(el => { el.classList.remove('active'); });
//     item.classList.add('active')
//   })
// })

document.querySelector(".burger-block").addEventListener('click', function () {
  document.querySelector(".burger").classList.toggle("active")
  document.querySelector(".burger-span").classList.toggle("active")
  document.querySelector(".burger-menu").classList.toggle("active")
})
