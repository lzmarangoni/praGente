import gsap from "gsap";
import {SplitText} from "./SplitText";

export const IntroTextAnimation = (linhas : Array<any>, quadradinho : any) => {
    let timeline = gsap.timeline()
    let animation = { y: 100,  duration: 0.5, stagger: 0.3 }
    timeline.from(".logo", 1.5, { opacity: 0, delay: 2 })
        .from(SplitText(linhas[0], "2").words, animation)
        .from(SplitText(linhas[1], "3").words, animation, ">-0.3")
        .from(SplitText(linhas[2], "4").words, animation)
        .from(quadradinho, { scaleX: 0, duration: 1 }, ">-0.4")
        .from(".buttons", 2 ,{y:200, ease:"back(2)", opacity:0}
            , ">-0.8");
}
