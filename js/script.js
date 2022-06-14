
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


$(".header-link").click(function () {
  $(".header-link").removeClass("active");
  $(this).addClass("active");
});

document.querySelector(".burger-block").addEventListener('click', function () {
  document.querySelector(".burger").classList.toggle("active")
  document.querySelector(".burger-span").classList.toggle("active")
  document.querySelector(".burger-menu").classList.toggle("active")
})

const animItems = document.querySelectorAll('._anim-item')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i += 1) {
      const animItem = animItems[i]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active')
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
           animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect()
      scrollLeft = window.scrollX || document.documentElement.scrollLeft
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll();
  }, 300)
}

