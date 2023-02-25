/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, Themed, } from "theme-ui"
import { Tween, Reveal } from 'react-gsap';

//For Image fade from left and right
export const RevealImg = ({ children, Variant, trigger }) => {
    var Var = {
        Variant1: { x: 0, y: "20px" },
        Variant2: { x: "20px", y: 0 },
    }
    return (
        <Reveal repeat threshold={1} >
            <Tween
                from={{ autoAlpha: 0, ...(Var[Variant]), delay: .2, }}
                to={{ autoAlpha: 1, y: 0, x: 0, }}
                ease="back.out(1)">
                {children}
            </Tween>
        </Reveal >
    )
};



//For Content Fade of title,desc,link with delay

export const RevealContent = ({ children, Variant, }) => {
    var Var = {
        Variant1: { delay: 0.4, x: "-10px" },
        Variant2: { delay: 0.9, x: "-20px" },
        Variant3: { delay: 1.4, x: "-10px" },
    }
    return (
        <Reveal repeat threshold={1} >
            <Tween
                from={{ autoAlpha: 0, ...(Var[Variant]), }}
                to={{ autoAlpha: 1, y: 0, x: 0 }}
                ease="back.out(1)">
                {children}
            </Tween>
        </Reveal>
    )
}




