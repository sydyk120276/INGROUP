// Slick slider
// $(document).ready(function(){
//   $('.slider').slick()
// })
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
  adaptiveHeight:false,
  speed: 1000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
});
