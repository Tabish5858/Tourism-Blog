function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#theMain"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#theMain" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#theMain", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#theMain").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();

function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"})
}




var tl =gsap.timeline()

tl.from("#navRight img,#navCenter ul li,#navLeft #leftIcons ul li",{
    y:-80,
    duration:0.8,
    delay:0.4,
    stagger:0.2,
})
tl.from("#firstHead",{
    x:-100,
    opacity:0,
    duration:0.5,
    delay:0.4,

})
tl.from("#imgBox2 img",{
    scale:2,
    opacity:0,
    duration:0.4,
    delay:0.3,
})
tl.from(".imgBox",{
    scale:1.1,
    duration:2,
    delay:0.6,
    // repeat:-1,
    opacity:0,
    // yoyo:true,
})




tl.from("#page2 #center2",{
    scale:0,
    duration:1,
    // delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #Center2",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,
    }
})
tl.from("#secondHead",{
    x:-100,
    duration:0.5,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #secondHead",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})
tl.from(".secondData",{
    scale:2,
    rotate:360,
    duration:0.5,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #secondData",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})






tl.from("#center3",{
    scale:0,
    duration:1,
    // delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 #center3",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})
tl.from("#thirdHead",{
    x:-100,
    duration:0.5,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 #thirdHead",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})
tl.from(".thirdData1",{
    x:-200,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3 .thirdData1",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})
tl.from(".thirdData2",{
    x:200,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3 .thirdData2",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})





tl.from("#main4",{
    scale:0,
    duration:1,
    // delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 #main4",
        scroller:"#theMain",
        // markers:true,
        start:"top 100%",
        end:"top 95%",
        scrub:2,}
})
tl.from("#page4Head",{
    x:-100,
    duration:0.5,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 #main4",
        scroller:"#theMain",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,}
})
tl.from("#page4Opt",{
    y:-50,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page4 #main4",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 85%",
        scrub:2,}
})
tl.from("#page4bottomLeft",{
    x:-200,
    duration:0.5,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 #main4",
        scroller:"#theMain",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,}
})
tl.from(".bottomRightBox",{
    y:100,
    duration:0.5,
    delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page4 #main4",
        scroller:"#theMain",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,}
})



tl.from("#main5 h1,#main5 h5",{
    scale:0,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#main5 h1,#main5 h5",
        scroller:"#theMain",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2,}
})
tl.from("#box5Head",{
    scale:0,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page5 #box5Head",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})
tl.from(".vb5",{
    x:200,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page5 .vb5",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})
tl.from("#box5Btn",{
    x:200,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page5 #box5Btn",
        scroller:"#theMain",
        // markers:true,
        start:"top 100%",
        end:"top 80%",
        scrub:2,}
})



tl.from("#page6 h1,#page6 h4",{
    scale:0,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page6 h1,#page6 h4",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})

tl.from("#page6 .right6Video",{
    y:100,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page6 .right6Video",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})

tl.from("#page6 .video6Data",{
    y:50,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page6 .video6Data",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})

tl.from("#page6 .left6box",{
    x:200,
    duration:1,
    // delay:0.3,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page6 .left6box",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})

tl.from("#main7 #main7Right",{
    x:-200,
    duration:1,
    // delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#main7 #main7Right",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})

tl.from("#left7Video video",{
    x:200,
    duration:1,
    // delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#left7Video video",
        scroller:"#theMain",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:2,}
})