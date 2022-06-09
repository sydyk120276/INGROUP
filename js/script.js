
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


const list = document.querySelectorAll(".nav-link")
list.forEach(item => {
  item.addEventListener('click', (e) => {
    list.forEach(el => { el.classList.remove('active'); });
    item.classList.add('active')
  })
})

document.querySelector(".burger-block").addEventListener('click', function () {
  document.querySelector(".burger").classList.toggle("active")
  document.querySelector(".burger-span").classList.toggle("active")
  document.querySelector(".burger-menu").classList.toggle("active")
})
