$(function(){
  main.hdcolor();
  main.submenu();
  main.maintxt();
  main.partnertxt();
  main.slideList();
  main.introtxt();
  main.datatxt();
  main.opertxt();
  main.solutiontxt();
  main.servicetxt();
  main.introTab();
  main.subbg();
    
})

var main = function(){
  let currScroll = $(window).scrollTop();

  return {
    common:function(){

    },
    hdcolor:function(){
      $(window).scroll(function(){
        var hdscroll = $(window).scrollTop();
        if(hdscroll > 0 ){
          $('header').addClass('on')
          console.log('2')
        }else{
          $('header').removeClass('on')
        }
      })
  

    },
    submenu:function(){
      $('.gnb_area > li').mouseenter(function(){
        $(this).find('.sub_menu').addClass('on');
      })
      $('.gnb_area > li').mouseleave(function(){
        $(this).find('.sub_menu').removeClass('on');
      })
    },
    maintxt:function(){
      var swiper = new Swiper(".swiper", {
        autoplay: {
            delay:2000,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
        navigation: {
          nextEl: ".btn_control .next",
          prevEl: ".btn_control .prev",
        },
      });

      var maintxMotion = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_visual",
          start:"top 10%",

        },
      
      })
      maintxMotion.addLabel('motion')
      .to('.sc_visual .inner',{yPercent:-30,opacity:1})
    },
    partnertxt:function(){
      var partnerMotion = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_partner",
          start:"-10% 50%",
          // markers:true,
        },
      })
      partnerMotion.addLabel('motion1')
      .to('.sc_partner .tx_wrap',{yPercent:-30,opacity:1})
    },
  
    slideList:function(){
      var slideMotion = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_slide ul",
          start:"top 10%",
          end:"+=500%",
          // markers:true,
          scrub:1,
          pin:true,
        },
        defaults:{
          duration:1
      },
      })
      slideMotion.addLabel('motion')
      .to('.sc_slide .slide_wrap',{
        xPercent:-100 + 25
        ,stagger:0.1
      })
    },

    introtxt:function(){
      var introMotion = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_intro",
          start:"top 60%",
          // markers:true,
        },
      })
      introMotion.addLabel('motion1')
      .to('.sc_intro .text_top',{yPercent:-40,opacity:1})
    },
    datatxt:function(){
      var datatxtMotion = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_databot",
          start:"top 60%",
          // markers:true,
        },
      })
      datatxtMotion.addLabel('motion1')
      .to('.sc_databot .text_top',{yPercent:-40,opacity:1})
    },
    solutiontxt:function(){
      var stMotin = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_operation",
          start:"top 60%",
          // markers:true,
        },
      })
      stMotin.addLabel('motion1')
      .to('.sc_operation .text_top',{yPercent:-40,opacity:1})
    },
    
    opertxt:function(){
      var opMotin = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_operation",
          start:"top 60%",
          // markers:true,
        },
      })
      opMotin.addLabel('motion1')
      .to('.sc_operation .text_top',{yPercent:-40,opacity:1})
    },
    solutiontxt:function(){
      var stMotin = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_solution",
          start:"top 60%",
          // markers:true,
        },
      })
      stMotin.addLabel('motion1')
      .to('.sc_solution .text_top',{yPercent:-40,opacity:1})
    },
    servicetxt:function(){
      var svMotin = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_service",
          start:"top 60%",
          // markers:true,
        },
      })
      svMotin.addLabel('motion1')
      .to('.sc_service .text_top',{yPercent:-60,opacity:1})
    },
    introTab:function(){
      $('.sc_intro .tab_nav a').click(function(e){
        e.preventDefault();
        clicktab = $(this).position().left;
        nowtab = $(this).data('target');
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab_click').animate({left:clicktab})
        $(nowtab).addClass('on').siblings().removeClass('on');
      })
    },

    subbg:function(){
      var subbgMotion = gsap.timeline({
        scrollTrigger: {
          trigger:".sc_subbg",
          start:"top 90%",
          end:"bottom 80%",
          // markers:true,
          scrub:1,

        },
      
      })
      subbgMotion.addLabel('motion')
      .to('.sc_subbg .whitebox',{width:0+'%'})

    }

  }



}();