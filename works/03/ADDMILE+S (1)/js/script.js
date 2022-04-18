$(function(){
  common.init();
  common.burger();
  common.scrollEvent();
  common.swiperEvent();
  common.dateCounter();
})
// end

var common = function () {
  let currScroll = $(window).scrollTop();

  return {
    init:function(){
    },
    burger:function(){
      $('.menu_btn').click(function(e){
        e.preventDefault()
        // $(this).toggleClass('on');
        $('.burger_menu').show().animate({
          left:0
        });
      })
      $('.close_btn').click(function(e){
        e.preventDefault()
        $('.burger_menu').show().animate({
          left: -100 + '%'
        });
      })
    },
    scrollEvent:function(){
      
      $(window).on("scroll", function () {
        //현재스크롤값!
        currScroll = $(window).scrollTop();

        //헤더
        (currScroll > 0 ) ? $('header').addClass('on'):$('header').removeClass('on')

        //board 뒷배경
        scBoard = $('.sc_board').offset().top;
        (currScroll > scBoard ) ? $('.board_bg').addClass('on') : $('.board_bg').removeClass('on')

      }); $(window).trigger("scroll"); //함수실행
    },

    swiperEvent:function(){
      var sc_slide = new Swiper(".sc_slide .swiper.tablet", {
        slidesPerView: 'auto',
        speed:1500,
        spaceBetween: 10,
        centeredSlides: true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type : 'bullets',
        },
        navigation: {
          nextEl: ".sc_slide .next",
          prevEl: ".sc_slide .prev",
        },
        breakpoints: {
          768:{ //태블릿
            spaceBetween: 50,
          },
          1024:{ //pc
            spaceBetween: 80,
          },
          1600:{ 
            spaceBetween: 200,
          }

        }
      });

      var sc_slide2 = new Swiper(".sc_slide .swiper.moblie", {
        speed:1500,
        loop:true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type : 'bullets',
        },
        navigation: {
          nextEl: ".sc_slide .next",
          prevEl: ".sc_slide .prev",
        },
        breakpoints: {
          768:{ //태블릿
            // spaceBetween: 50,
          },

        }
      });

    },


  
    dateCounter:function(){

      fn_Timer(30, 08, 21, 43);

      function fn_Timer(d, h, m, s) {  //매개변수
        var day = d;
        var hour = h;
        var minute = m;
        var second = s;

        var timer = setInterval(function () {
            // 초기설정 및 2자리 적용
            day = parseInt(day);
            hour = parseInt(hour);
            minute = parseInt(minute);
            second = parseInt(second);

            if (second == 0) { 
              second = "00" 
            } else { if (second < 10) { 
              second = "0" + second; 
            } 
          };
          
            if (minute == 0) {
               minute = "00"
            } else { 
              if (minute < 10) { 
              minute = "0" + minute; 
            } };
            if (hour == 0) { hour = "00" } else { if (hour < 10) { hour = "0" + hour; } };
            if (day == 0) { day = "00" } else { if (day < 10) { day = "0" + day; } };

            $(".day strong").text(day);
            $(".hour strong").text(hour);
            $(".minute strong").text(minute);
            $(".second strong").text(second);
            $(".day span").text(day);
            $(".hour span").text(hour);
            $(".minute span").text(minute);
            $(".second span").text(second);


            if (second == 0 && minute == 0 && hour == 0 && day == 0) {
                fn_ItemEnd();
                clearInterval(timer); /* 타이머 종료 */
            } else {
                second--;

                // 분처리
                if (second < 0) { minute--; second = 59; }
                //시간처리
                if (minute < 0) {
                    if (hour > 0) {
                        hour--;
                        minute = 59;
                    } else {
                        //날짜처리
                        if (day > 0) { day--; hour = 23; minute = 59; }
                    }
                }
            }
        }, 1000); /* millisecond 단위의 인터벌 */
    }

    }

    
  }
}();




