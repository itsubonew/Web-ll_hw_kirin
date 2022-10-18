// const logo = document.querySelector('.logo')
// const beerImage = document.querySelector('.beer')


// gsap.from(logo,{
//     x: -100,
//     duration: 0.9,
//     autoAlpha: 0,
  
// })

// gsap.from('.list_item',{
//     x: -100,
//     duration: 1,
//     autoAlpha: 0,
//     stagger: {
//     each: 0.1,
// }
// }) 

// const title = gsap.to('.title',{
//     y: -30,
//     duration: 1.7,
//     paused: true,
//     opacity: 1,
// })

// setTimeout(()=>{
//     title.resume()
// },1000)

// const last = gsap.to('.tagline',{
//     y: -10,
//     duration: 1.0,
//     paused: true,
//     opacity: 1,
// })

// setTimeout(() => {
//     last.resume()
// },1500)

// const lastDesc = gsap.to('.desc',{
//     y: -30,
//     duration: 1.0,
//     paused: true,
//     opacity: 1,
// })

// setTimeout(() => {
//     lastDesc.resume()
// },1500)

// add(gsap.from(beerImage, {
//     autoAlpha: 0,
//     y: -300,
//     // ease: "power5.inOut",
// }))

 const animate = gsap.timeline()
 const beerImage = document.querySelector('.beer')

 animate
 .from('.nav',{autoAlpha:0,x:-100})
 .from('.list_item',{
    autoAlpha:0,
    duration:1,
    x:-100,
    stagger: {
    each: 0.2,}})
 .from('.title',{autoAlpha:0,duration:1, y:-30})
 .from('.sub-title',{autoAlpha:0,duration:1,y:-30})

 .add(gsap.from(beerImage, {
     autoAlpha: 0,
     y: -300,
 }))