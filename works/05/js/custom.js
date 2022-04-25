$(function(){
    $('.gnb').mouseover(function () { 
        $(this).addClass('on')

    });
    $('.gnb').mouseleave(function () { 
        $(this).removeClass('on');
        $('.sub_wrap').removeClass('on')
    });


    $('.gnb > li').mouseover(function () { 
        $('.sub_wrap').removeClass('on')
        $(this).find('.sub_wrap').addClass('on')
    });

    $('.img_menu li').mouseover(function(){
        val = $(this).data('img');
        $(this).parents('.sub_left').siblings('.sub_right').find('img').attr('src',val)
    });

    const intro = gsap.timeline({
        //옵션
        defaults:{
            duration:1
        }

    })
    intro.addLabel('motion1')
    .fromTo('.sc_banner .main_title span',{opacity:0,y:30},{opacity:1,y:0,stagger:0.2},'motion1')
    .fromTo('.sc_banner .main_title p',{opacity:0,y:30},{opacity:1,y:0,},'motion1')
    .fromTo('.sc_banner .img_wrap .main_bg',{opacity:0,y:30},{opacity:1,y:0},'motion1')



    gsap.to('.sc_banner .img_wrap .phone img',{
        scrollTrigger:{
            trigger:".sc_banner",
            start:"top top",
            end:"bottom 100%",
            // markers:true,
            scrub:1,

        },
        rotateX:0
    })
    const sertxt = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_service",
            start:"top 50%",
            end:"bottom 90%",
            // markers:true,
            // scrub:1,

        },

        defaults:{
            duration:1
        },
      });
    sertxt.addLabel('motion1')
    .fromTo('.sc_service .cont_title span',{opacity:0,y:50},{opacity:1,y:0,stagger:0.3},'motion1')

    const protxt = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_product",
            start:"top 70%",
            end:"bottom 90%",
            // markers:true,
            // scrub:1,

        },

        defaults:{
            duration:1
        },
      });
    protxt.addLabel('motion1')
    .fromTo('.sc_product .cont_title span',{opacity:0,y:50},{opacity:1,y:0,stagger:0.2},'motion1')
    .fromTo('.sc_product .group_title .desc',{opacity:0,y:40},{opacity:1,y:0},'motion1')


    const extxt = gsap.timeline({
        scrollTrigger:{
            trigger:".sc_event",
            start:"top 50%",
            end:"bottom 90%",
            // markers:true,
            // scrub:1,

        },

        defaults:{
            duration:1
        },
      });
    extxt.addLabel('motion1')
    .fromTo('.sc_event .cont_title span',{opacity:0,y:70},{opacity:1,y:0,stagger:0.2},'motion1')
    .fromTo('.sc_event .group_title .desc',{opacity:0,y:30},{opacity:1,y:0},'motion1')


    // gsap.to('.option_wrap .option',{
    //     scrollTrigger:{
    //         trigger:".option",
    //         start:"top top",
    //         end:"bottom 100%",
    //         markers:true,
    //         scrub:1,
    //         onEnter:()=>{
    //             $('video').eq(0).get(0).play()
    //         }

    //     },
    // })
    gsap.utils.toArray(".option").forEach((option, index) => {
        gsap.to(option, {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: option,
                start:"top top",
                end:"bottom 100%",
                // markers:true,
                onEnter:()=>{
                $('video').eq(index).addClass('on').siblings().removeClass('on');
                $('video').eq(index)[0].play()
                
                },
                onLeaveBack:()=>{  //내리다가 다시올렸을때
                    
                    if(index >= 1){
                        // alert('3')
                        $('video').eq((index-1)).addClass('on').siblings().removeClass('on');
                        $('video').eq((index-1))[0].play()
                    }

                
                },
            }
        })
      });

    const prd = gsap.timeline({
    scrollTrigger:{
        trigger:".sc_event",
        start:"top top",
        end:"bottom 100%",
        // markers:true,
        scrub:1,

    },
    });
    prd.addLabel('motion1')
    .to('.sc_event .img_wrap .dot_bg1',{yPercent:50},'motion1')
    .to('.sc_event .img_wrap .dot_bg2',{yPercent:-50},'motion1')
    .to('.sc_event .img_wrap .live_img',{yPercent:10},'motion1')

    const partxt = gsap.timeline({
    scrollTrigger:{
        trigger:".sc_showroom",
        start:"top 40%",
        end:"bottom 90%",
        // markers:true,
        // scrub:1,

    },

    defaults:{
        duration:1
    },
    });
    partxt.addLabel('motion1')
    .fromTo('.sc_showroom .cont_title span',{opacity:0,y:80},{opacity:1,y:0,stagger:0.2},'motion1')
    .fromTo('.sc_showroom .group_title .desc',{opacity:0,y:50},{opacity:1,y:0,stagger:0.4},'motion1')
    .fromTo('.sc_showroom .group_title .click_btn',{opacity:0,y:30},{opacity:1,y:0},'motion1')



})    

