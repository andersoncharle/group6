

$(document).ready(()=>{
// $("#contanct").validate();
const display_message=$("#display_message");
// const svg=$("svg");
// svg.show();
display_message.hide();
$("#contact").on("submit",(e)=>{
   e.preventDefault();
    const name= $("#name").val();
   const email=$("#email").val();
   const subject=$("#subject").val();
    const message=$("#message").val();

    const user=$("#user");
    const strong=$("#stron");
    const result=strong.text(name);
   strong.html(name);
    display_message.show();
    console.log(name+' '+email+' '+subject+' '+message);
// if ($("#stron").html(result)==name) {
//     $("#stron").remove(result);
//     $(this).parent().remove();
    const para=document.querySelector("#para");
    para.css({
        'padding':'0px 0px 0px 0px'
    })
// }
 





})


})
jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
 
});

