function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const containerElement = document.getElementById('container');

document.addEventListener("DOMContentLoaded", animation);

function animation() {
    gsap.registerPlugin(ScrollTrigger)

    for (let i = 0; i < 200; i++) {
        const cloudEmoji = document.createElement('span');
        cloudEmoji.classList.add('cloud');
        cloudEmoji.innerText = '☁️';
        cloudEmoji.style.left = getRandomInt(containerElement.offsetWidth) + 'px';
        cloudEmoji.style.top = getRandomInt(containerElement.offsetHeight) + 'px';

        containerElement.appendChild(cloudEmoji);

        gsap.to(cloudEmoji, {
            scrollTrigger: {
                trigger: cloudEmoji,
                // markers: true,
                start: 'top 80%',
                scrub: true
            },
            opacity: 1,
            duration: 1,
        })
    }

    // gsap.to('.cloud', {
    //     scrollTrigger: '.cloud',
    //     opacity: 1,
    // })
}
