/* 
    ======================== ***** ============================= 
      Template Name: Texter V2 – One Page Writer Portfolio Template
      Template URI: https://www.designtocodes.com/wp-content/uploads/2022/11/Texter_One_Page_Portfolio_Template.jpg
      Description: Texter V2 – One Page Writer Portfolio Template is built with a modern design and the latest web technologies.
      Author: DesignToCodes
      Author URI: https://www.designtocodes.com
      Text Domain: Texter v2
*/

    $(window).on("load",function(){
        // Preloader Js
        $("#preloader").fadeOut(1500);

        // Silk Carousel slick
        function slickCarousel() {
            // home v1 page testimonial slider
            $('.d2c_testimonial_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                autoplaySpeed: 2000,
                dots: false,
                infinite: true,
                prevArrow: '<button type="button" class="d2c_carousel_btn left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="d2c_carousel_btn right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        arrows:false
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        arrows:false
                      }
                    }
                ]
            });

            // home v1 page testimonial slider
            $('.d2c_portfolio_slider').slick({
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '100px',
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                speed: 1000,
                autoplaySpeed: 3000,
                dots: true,
                infinite: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: '80px',
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            centerMode: true,
                            centerPadding: '60px',
                        }
                    },
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2,
                            centerMode: false,
                            centerPadding: '0px',
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            centerPadding: '0px',
                        }
                    }
                ]
            });

        }
        slickCarousel();  


        // Blog title and text excerpt

        // var d2c_blog_text = $('.d2c_blog_card').find('.d2c_blog_text');
        // var d2c_blog_title = $('.d2c_blog_card').find('.d2c_blog_title');

        // function excerpt(excerptElement, number , more = "..."){
        //     excerptElement.each(function(){
        //     var productTitle = $(this).text(),
        //     productTitleExcerpt,
        //     toArray = productTitle.split("", number),
        //     joinArray = toArray.join(''),
        //     joinArrayToArray = joinArray.split(" "),
        //     joinArrayToArrayPop = joinArrayToArray.pop(),
        //     joinArrayToArrayPopPush = joinArrayToArray.push(more),
        //     joinArrayToArrayPopPushJoin = joinArrayToArray.join(' '),
        //     productTitleExcerpt = joinArrayToArrayPopPushJoin;

        //     if(productTitle.length > number){
        //         productTitle = productTitleExcerpt;
        //         $(this).text(productTitle);
        //     }
        //     });
        // }

        // excerpt(d2c_blog_text, 60, "..");
        // excerpt(d2c_blog_title,40,"..")

        // bottom to top scroll js
        function scrollToTop(){
            //Get the button
            var mybutton = document.getElementById("scrollToTopBtn");
        
            // When the user scrolls down 150px from the top of the document, show the button
            window.onscroll = function () { scrollFunction() };
        
            function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
            }
        
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }
            document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);
        }scrollToTop();

        // Navbar Toggle Icon
        function navbar_toggler(){
            $('.navbar-toggler[data-toggle=collapse]').click(function () {
                if( $(".navbar-toggler[data-toggle=collapse] i").hasClass('fa-bars') ) {

                    $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-bars");
                    $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-times");
                }
                else {      
                    $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-times");
                    $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-bars");
                }
            });
        }
        navbar_toggler();
        // Navbar Clone In Mobile Device
        function navClone(){
            $('.js-clone-nav').each(function(){
                var $this = $(this);
                $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
            });

            $('.d2c_mobile_view .nav-link').click(function(){
                    $(".nav-link").removeClass("active");
                    $('.d2c_mobile_view').removeClass('show');
                    $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-times");
                    $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-bars");
                    $(this).toggleClass('active');
            });
        }
        navClone();
    });

    // Form Validation js
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('form_validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
    })();

    


    