
var tl = gsap.timeline();


tl.from('.left-nav h1', {
    y: -100,
    opacity: 0,
    duration: .3
})
tl.from('.mid-nav a', {
    y: -100,
    opacity: 0,
    stagger: .1
})
tl.from('.right-nav button', {
    scale: 0
})
tl.from('.upper-homepage-container', {
    scale: 0
})
tl.from('.upper-lower-homepage-container', {
    y: 150,
    opacity: 0,
    scale: 0
})
tl.from('.lower-lower-homepage-container-card', {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: 'lower-lower-homepage-container-card',
        scroller: 'body',
        // markers: true,
        start: "700px 600px",
        end: "400px 50px",
        scrub: 2
    }
})
tl.from('.left-lower-discover', {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.left-lower-discover',
        scroller: 'body',
        markers: true,
        start: "200px 700px",
        end: "0px 400px",
        scrub: 2
    }
})
tl.from('.right-lower-discover', {
    scale: 0,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.right-lower-discover',
        scroller: 'body',
        markers: true,
        start: "200px 700px",
        end: "0px 400px",
        scrub: 2
    }
})



































var midNavigation = document.querySelector('.mid-nav');
var menuButton = document.querySelector('.onkar');

menuButton.addEventListener('click', function() {
    midNavigation.classList.toggle('dropdown');
})


var sol = document.querySelector('.sol');
var abo = document.querySelector('.abo');
var res = document.querySelector('.res');

var sol_anchor = document.querySelector('.solution');

sol_anchor.addEventListener('click', () => {
    sol.forEach(element => {
        element.id = "solution";
    });
})