import gsap from "gsap";

export const parallaxEffect = (container : HTMLElement) => {
    setTimeout(() => {
        gsap.to(container, {
            scrollTrigger: {
                trigger: container,
                scrub: true,
                start: "top top",
                end: "bottom top",
                toggleActions: "play pause resume reset",
            },
            y: 100,
            duration: 2,
        })
    }, 500);
}
