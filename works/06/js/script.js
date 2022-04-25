$(function(){
    main.common();
    main.landing();
    main.mainVis();
    main.aboutBg();
    main.circleMotion();
    main.addtext();

   
})


var main = function() {
    let currScroll = $(window).scrollTop();
    return {
        common:function(){

            $('.move_link').click(function(e){
                e.preventDefault();
                var linkTarget = $(this).data('target')
                gsap.to(window, {duration: 1, scrollTo:linkTarget});
            })
        },

        landing:function(){

            // 메인
            var mainTitle = new SplitType('.sc_main .main_txt h2', { types: 'words, chars', });
            // chars 단어를 하나하나쪼갤때씀
            // words 단어 마디마다 쪼갬
            var mainMotion = gsap.timeline({ paused:true })
            mainMotion.addLabel('motion01')
            .to(mainTitle.chars,{
                yPercent:-100,
                stagger:0.05,
            })
            .to('.sc_main .main_line',2,{width:100+'%'},'motion01')
            .to('.sc_main .about_txt',3,{opacity:1},'motion01')


           var introMotion = gsap.timeline({
                defaults : {
                    delay:1
                },
                onComplete:function(){
                    mainMotion.play();
                    $('.slide_all').remove();
                }

           })
           introMotion.to('.slide_all .logo',{opacity:0})
           .addLabel('intro1')
           .to('.slide_black2',.8,{xPercent:100,delay:.1},"intro1")
           .to('.slide_black1',.5,{xPercent:100,delay:.1},"intro1")
           .to('.slide_black3',1,{xPercent:100,delay:.1},"intro1")
        },
        mainVis:function(){
            gsap.to('.sc_main .main_img .img_wrap',{
                scrollTrigger:{
                    trigger:".main_img",
                    start:"top 90%",
                    end:"bottom top",
                    // markers:true,
                    scrub:0,
            
                },
                yPercent:-20,
                ease:"none",
            })
 
        },
        aboutBg:function(){
            var mountain = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc_aboutUs",
                    start:"30% 70%%",
                    end:"bottom top",
                    // markers:true,
                    scrub:0.5,
            
                },
            
                defaults:{
                    duration:1
                },
            });
            mountain.addLabel('motion1')
            .fromTo('.sc_aboutUs .about_bg .aboutimg1',{y:0},{yPercent:-20},'motion1')
            .fromTo('.sc_aboutUs .about_bg .aboutimg2',{y:0},{yPercent:-20},'motion1')
            .fromTo('.sc_aboutUs .about_bg .aboutimg3',{y:0},{yPercent:-20,stagger:0.3},'motion1')
            .fromTo('.sc_aboutUs .about_bg .aboutimg4',{y:0},{yPercent:20,stagger:0.3},'motion1')

            var abouttxt = new SplitType('.sc_aboutUs .txt_wrap h3', { types: 'words' });
            // chars 하나나쪼갤때씀
            var txtmotion = gsap.timeline({
                scrollTrigger:{
                    trigger:".about_bg",
                    start:"20% 50%",
                    // end:"bottom top",
                    // markers:true,
                    // scrub:0.5,
            
                },
            })
            txtmotion.addLabel('motion2')
            .to(abouttxt.words,{opacity:1,yPercent:-140,stagger:0.05},'motion2')
            // .to('.sc_aboutUs .txt_wrap p',2,{y:200},'motion2')

        },
        circleMotion:function(){
            
            const scrollcircle = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc_circle",
                    start:"top top",
                    end:"+=500%",
                    // markers:true,
                    scrub:1,
                    pin:true,
            
                },
                
                defaults:{
                    duration:1
                },
            });
            scrollcircle.addLabel('motion1')
            .to('.sc_circle .left',{left:'15%' , bottom:'30%',width:300,height:300},"motion1")
            .to('.sc_circle .right',{right:'15%' , bottom:'30%',width:300,height:300},"motion1")
            .addLabel('motion2')
            .to('.sc_circle .left',{left:'100%',xPercent:-100, bottom:'50%',yPercent:50,width:400,height:400},"motion2")
            .to('.sc_circle .right',{right:'100%',xPercent:100, bottom:'50%',yPercent:50,width:400,height:400},"motion2")
            .addLabel('motion3')
            .to('.sc_circle .left',{xPercent:-50},"motion3")
            .to('.sc_circle .right',{xPercent:50},"motion3")
            .to('.left_area .imgcircle',{xPercent:-50},"motion3")
            .to('.right_area .imgcircle',{xPercent:50},"motion3")
            .to('.right_area .imgcircle img',{xPercent:-50},"motion3")
            .to('.left_area .imgcircle img',{xPercent:50},"motion3")
            // .to('.circle img',{scale:1,},"motion3")

            .addLabel('motion4')
            .to('.imgcircle img',{height:"100vw"},"motion4")
            .set('.sc_circle .round',{border:'1px solid transparent'},"motion4")
            .to('.imgcircle',{width:'100vw',height:'100vw'},"motion4")
            .to(".imgcircle .center_txt", 1, {fontSize: '50px'},'motion4')
            .addLabel('motion5')
            .to('.add_txt',{top:0},"motion5")
           

        },
        addtext:function(){
            var addwrap = new SplitType('.add_txt h2 span', { types: 'lines' });
            var addtxt = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc_intro",
                    start:"top 100%",
                    // end:"bottom top",
                    // 기준점수정
                    
                    // markers:true,
                    // scrub:0.5,
                },
            })
            addtxt.addLabel('motion1')
     
            //수정
            .to(addwrap.lines,{opacity:1,yPercent:-100,stagger:0.25},'motion1')
            // .to('.sc_aboutUs .txt_wrap p',{y:-200},'motion1')

        }
    }
}();