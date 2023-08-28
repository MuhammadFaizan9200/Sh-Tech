// ******CUSTOM CURSOR*************

// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {

//     cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")

// });

// document.addEventListener('click', () => {

//     cursor.classList.add("expand");

//     setTimeout(() => {

//         cursor.classList.remove("expand");

//     }, 500)

// });











$(window).scroll(function(){

    if($(this).scrollTop() > 100){

        $('.header-main-wrapper').addClass('sticky')

    } else{

        $('.header-main-wrapper').removeClass('sticky')

    }

});



$('.bars-icon').on('click', function() {

  $('.header-main-02').toggleClass('active');

  $('.header-main-quote').toggleClass('active');

});



$('.show-f').on('click', function() {

  $('.submenu-f').toggleClass('subactive');

  $(this).toggleClass('submenu-active');

});





$('.show-s').on('click', function() {

  $('.submenu-s').toggleClass('subactive');

  $(this).toggleClass('submenu-active');

});







$('.show-t').on('click', function() {

  $('.submenu-t').toggleClass('subactive');

  $(this).toggleClass('submenu-active');

});



$('.show-p').on('click', function() {

  $('.submenu-p').toggleClass('subactive');

  $(this).toggleClass('submenu-active');

});





$('.show-u').on('click', function() {

  $('.submenu-u').toggleClass('subactive');

  $(this).toggleClass('submenu-active');

});



$(document).ready(function(){

    $(".logo-branding-tabs-hide").click(function(){

        $(".logo-branding-tabs").hide();

    });

    $(".logo-branding-tabs-show").click(function(){

        $(".logo-branding-tabs").show();

    });

});



$(".video-branding-tabs").hide();



$(document).ready(function(){

    $(".video-branding-tabs-hide").click(function(){

        $(".video-branding-tabs").hide();

    });

    $(".video-branding-tabs-show").click(function(){

        $(".video-branding-tabs").show();

    });

});



$(".mobile-application-tabs").hide();



$(document).ready(function(){

    $(".mobile-application-tabs-hide").click(function(){

        $(".mobile-application-tabs").hide();

    });

    $(".mobile-application-tabs-show").click(function(){

        $(".mobile-application-tabs").show();

    });

});



$('.nav-tabs-submenu-show').on('click', function() {

  $('.nav-tabs-submenu').toggleClass('nav-tabs-submenu-active');

});



$('.video-animation-slider').slick({

  infinite: true,

  slidesToShow: 5,

  slidesToScroll: 1,

  vertical: false,

  verticalSwiping: false,

  arrows: true,

  responsive: [

  {

    breakpoint: 575,

    settings: {

      arrows: false,

      autoplay: true,

      slidesToShow: 1,

      slidesToScroll: 1,

      autoplaySpeed: 1000,

      pauseOnHover: true,

    }

  },

  {

    breakpoint: 768,

    settings: {

      arrows: false,

      slidesToShow: 2,

      slidesToScroll: 1,

    }

  },

  {

    breakpoint: 992,

    settings: {

      arrows: false,

      slidesToShow: 3,

      slidesToScroll: 1,

    }

  }

  ]

});



$('.custom-carousel-slider').owlCarousel({

    loop:true,

    margin:10,

    nav:false,

    autoplay:true,

    autoplayTimeout:1000,

    autoplayHoverPause:true,

    responsive:{

    0:{

      items:1

    },

    600:{

      items:1

    },

    1000:{

      items:2

    }

  }

});



// Wrap every letter in a span

var textWrapper = document.querySelector('.ml11 .letters');

textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|\.)/g, "<span class='letter'>$&</span>");



anime.timeline({loop: true})

.add({

  targets: '.ml11 .line',

  scaleY: [0,1],

  opacity: [0.5,1],

  easing: "easeOutExpo",

  duration: 700

})

.add({

  targets: '.ml11 .line',

  translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 40],

  easing: "easeOutExpo",

  duration: 700,

  delay: 100

}).add({

  targets: '.ml11 .letter',

  opacity: [0,1],

  easing: "easeOutExpo",

  duration: 600,

  offset: '-=775',

  delay: (el, i) => 34 * (i+1)

}).add({

  targets: '.ml11',

  opacity: 0,

  duration: 1000,

  easing: "easeOutExpo",

  delay: 1000

});





AOS.init();










// setTimeout(function() {

// $('.custom-modal-main-b-f').css("display", "block");

// $('.custom-modal-main-b-f').addClass("show");

// }, 10000);





$('.custom-modal-main-b-f button.close').on('click', function(){

$('.custom-modal-main-b-f').css("display", "none");

$('.custom-modal-main-b-f').removeClass("show");

});



