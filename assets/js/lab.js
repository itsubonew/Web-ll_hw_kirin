const logo = document.querySelector('.logo')

gsap.from(logo,{
    x: -100,
    duration: 0.9,
    autoAlpha: 0,
  
})

gsap.from('.list_item',{
    x: -100,
    duration: 1,
    autoAlpha: 0,
    stagger: {
    each: 0.1,
}
}) 

const title = gsap.to('.title',{
    y: -30,
    duration: 1.7,
    paused: true,
    opacity: 1,
})

setTimeout(()=>{
    title.resume()
},1000)

const last = gsap.to('.tagline',{
    y: -10,
    duration: 1.0,
    paused: true,
    opacity: 1,
})

setTimeout(() => {
    last.resume()
},1500)

const lastDesc = gsap.to('.desc',{
    y: -30,
    duration: 1.0,
    paused: true,
    opacity: 1,
})

setTimeout(() => {
    lastDesc.resume()
},1500)
