function scrollToTop(){
    window.scrollTo({top:0,behavior:"smooth"})
}


gsap.to(".imgBox",{
    ease: Expo.easeInOut,
    width:"100%",
    duration:5,
    stagger:2,
    repeat:-1,
    repeatDelay:0,
})