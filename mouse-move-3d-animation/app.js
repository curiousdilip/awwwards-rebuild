const nav = document.querySelector(".nav");

const heroTitle = document.querySelector(".hero-title>h1"),
    heroGallery = document.querySelector(".hero-gallery"),
    heroFrames = document.querySelectorAll(".hero-gallery-frame");

let isEnabled = false;

const initHero = () => {
    gsap.set([nav, heroGallery], { autoAlpha: 0 });
    gsap.set(heroTitle, { y: '-100%' });
    gsap.set([heroFrames], { height: 0 });

    showHero();
}


const showHero = () => {
    gsap.timeline()
        .to(
            "nav",
            {
                duration: 1.2,
                autoAlpha: 1,
                ease: "expo.inOut",
            },
            0
        )
        .to(
            heroTitle,
            {
                duration: 1.8,
                y: 0,
                ease: "expo.inOut",
                stagger: 0.025,
            },
            0
        )
        .to(
            heroGallery,
            {
                duration: 0.5,
                autoAlpha: 1,
                ease: "expo.inOut",
                stagger: 0.025,
            },
            0
        )
        .to(
            heroFrames,
            {
                duration: 1.0,
                height: 'auto',
                ease: "expo.inOut",
                stagger: {
                    each: 0.025,
                    from: 'random',
                    grid: 'auto',
                    ease: 'expo.inOut'
                },
                onComplete: () => {
                    isEnabled = true;
                }
            },
            0.1
        )

};
const animateImages = (event) => {
    heroFrames.forEach((el) => {
        let xPos = event.clientX / window.innerWidth - 0.5,
            yPos = event.clientY / window.innerHeight - 0.5;

        gsap.to(el, {
            duration: 0.5,
            rotationY: xPos * 10,
            rotationX: yPos * 10,
            stagger: 0.055,
        })

    })
}

window.addEventListener('mousemove', (event) => {
    if (!isEnabled) return;
    animateImages(event)
})


window.onload = () => {
    initHero();
}
