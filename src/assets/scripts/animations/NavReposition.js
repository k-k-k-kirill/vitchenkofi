import {TimelineMax, Expo} from 'gsap';
    
const createTimeLine = (ref) => {
    //Reposition nav menu on scroll 
    let tl = new TimelineMax({
        paused: true,
    })

    tl.set(ref, {x: 0, y: 0})
    .to(ref, 0.05, {x: "-100%", ease: Expo.easeOut})
    .to(ref, 0.05, { position: "fixed", right: 0, top: "5%", ease: Expo.easeOut})

    return tl
}

export default createTimeLine