$(function(){

    $('.slide_wrap h3').click(function(e){
        e.preventDefault();
        $(this).parents('.slide').addClass('on').siblings().removeClass('on');

        if($(this).parents('.slide').hasClass('slide_top')){
            slide02.autoplay.stop();
            if($(this).parents('.slide').find('.stop').css('display') == 'none'){
                slide01.autoplay.stop();
            }else{
                slide01.autoplay.start();
            }
        }else {
            slide01.autoplay.stop();
            if($(this).parents('.slide').find('.stop').css('display') == 'none'){
                slide02.autoplay.stop();
            }else{
                slide02.autoplay.start();
            }
        }
    });

    var slide01 = new Swiper(".cont_slide1", {
        autoplay: {
            delay:2000,
        },
        pagination: {
            el: ".cont_slide1 .swiper-pagination",
            type: "fraction",
          },
        navigation: {
            nextEl: ".cont_slide1 .btn_control .next",
            prevEl: ".cont_slide1 .btn_control .prev",
        },
        observer: true,
        observeParents: true,
    });
    var slide02 = new Swiper(".cont_slide2", {
        autoplay: {
            delay:2000,
        },
        pagination: {
            el: ".cont_slide2 .swiper-pagination",
            type: "fraction",
          },
        navigation: {
            nextEl: ".cont_slide2 .btn_control .next",
            prevEl: ".cont_slide2 .btn_control .prev",
        },
        observer: true,
        observeParents: true,
    });
    slide02.autoplay.stop();

    $('.cont_slide1 .btns').click(function(e){
        e.preventDefault();

        if($(this).find('.stop').css('display') == 'none'){
            $(this).find('.stop').show();
            $(this).find('.play').hide();
            slide01.autoplay.start();
        }else{
            $(this).find('.stop').hide();
            $(this).find('.play').show();
            slide01.autoplay.stop();
        }
    })


    $('.cont_slide2 .btns').click(function(e){
        e.preventDefault();

        if($(this).find('.stop').css('display') == 'none'){
            $(this).find('.stop').show();
            $(this).find('.play').hide();
            slide02.autoplay.start();
        }else{
            $(this).find('.stop').hide();
            $(this).find('.play').show();
            slide02.autoplay.stop();
        }
    })

    var slide03 = new Swiper(".sc_advert .advert", {
        slidesPerView: 3,
        spaceBetween: 40,
        autoplay: {
            delay:2000,
        },
        pagination: {
            el: ".sc_advert .swiper-pagination",
            type: "fraction",
        },
        navigation: {
        nextEl: ".sc_advert .btn_control .next",
        prevEl: ".sc_advert .btn_control .prev",
        },
    });

    $('.sc_advert .btns').click(function(e){
        e.preventDefault();
        if($(this).find('.stop').css('display') == 'none'){
            $(this).find('.stop').show();
            $(this).find('.play').hide();
            slide03.autoplay.start();
        }else{
            $(this).find('.stop').hide();
            $(this).find('.play').show();
            slide03.autoplay.stop();
        }
    })

    $('.site_list').click(function (e) { 
        e.preventDefault();
        if($(this).hasClass('on')){
            $('.site_list').removeClass('on');
            $('.site_wrap').stop().slideUp(200);
        }else{
            $('.site_list').removeClass('on');
            $(this).addClass('on');
            $('.site_wrap').slideUp();
            $(this).children().stop().slideDown(200);
        }
    });

    $('.site_wrap li:first-child').keydown(function (e){
        var v_keyCode = event.keyCode || event.which;
        if(v_keyCode == 9){
            if(event.shiftKey){
                $('.site_list').removeClass('on');
                $('.site_wrap').stop().slideUp(200);
            }
        }
    })
    $('.site_wrap li:last-child').keydown(function (e){
        var v_keyCode = event.keyCode || event.which;
        if(v_keyCode == 9){
            if(!event.shiftKey){
                $('.site_list').removeClass('on');
                $('.site_wrap').stop().slideUp(200);
            }
        }
    })
})