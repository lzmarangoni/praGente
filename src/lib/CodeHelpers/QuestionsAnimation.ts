import gsap from "gsap";

export const QuestionAnimations = (selectorArray : Array<string>) => {
    return () => {
        let timeline = gsap.timeline();
        timeline.from(".subtitle", {
            scrollTrigger: {
                trigger: ".subtitle",
                start: "top 20%",
                scrub: 1,
                pin: true,
            },
            x: "-20%",
            opacity: 0,
        })
            .from(".inicioTeste", {
                y:"50%",
                ease: "back(1)",
                duration: 1.2,
                opacity:0
            })
        selectorArray.forEach(selector => {
            gsap.from(selector, {
                scrollTrigger: {
                    trigger: selector,
                    toggleActions: "play pause resume reverse",
                    pin: true,
                    start: "top 5%",
                    
                },
                x: "-100%",
                duration: 2,
                ease: "back(1)"
            })
        });
    }

}
