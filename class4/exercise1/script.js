// use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", animation);

 const donutEmoji = document.getElementById('donut');

 const ROTATION = 360;

 function animation() {
    
    // gsap.to('#donut', {
    //     scale: 2,
    //     delay: 1, 
    //     onComplete: function () {
    //         console.log('animation completed!')
    //     }
    // });

    // gsap.to('#frog', {
    //     rotation: 360,
    //     repeat: -1,
    // })

    // gsap.to('#taco', {
    //     opacity: 0,
    //     ease: "power4.out",
    //     duration: 2,
    //     repeat: -1,
    // });

    // gsap.to('#flower', {
    //     rotation: ROTATION,
    //     duration: 2,
    // });

    // gsap.to('#ball', {
    //     y: 20,
    //     ease: 'bounce.out',
    //     duration: 2,
    //     repeat: -1,
    // })

    // gsap.from('#ball', {
    //     y: -20,
    //     repeat: -1,
    //     ease: 'bounce.out',
    //     duration: 2,
    // });

    // gsap.to('#tongue', {
    //     scale: 2,
    //     onComplete: function () {
    //         gsap.to('#tongue', {
    //             y: -20,
    //         })
    //     }
    // })

    let timeline = gsap.timeline({
        repeat: -1,
        delay: 1,
    });
    timeline.to('#tongue', { scale: 2 });
    timeline.to('#tongue', { y: -20 });
    timeline.to('#tongue', { y: 0, scale: 1 })
    timeline.to('#tongue', { delay: 1 })
 }