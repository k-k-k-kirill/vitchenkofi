import { TweenMax, Expo} from 'gsap';
import addSpans from '../../../utils/addSpans';

// Effect 3
export default class HoverTypeTxtFx {
    constructor(el) {
        this.parent = el.parentElement.parentElement
        this.DOM = {el: el};
        addSpans(this.DOM.el)
        this.DOM.letters = [...this.DOM.el.querySelectorAll('span')];
        this.initEvents();

    }
    
    animateLetters() {
        TweenMax.killTweensOf(this.DOM.letters);
        TweenMax.set(this.DOM.letters, {opacity: 0});
        TweenMax.staggerTo(this.DOM.letters, 0.1, {
            ease: Expo.easeOut,
            startAt: {opacity: 0},
            opacity: 1,
        }, 0.025);
    }

    initEvents() {

        this.mouseenterFn = () => {
            this.animateLetters();
        };


        this.parent.addEventListener('mouseenter', this.mouseenterFn);

    }
    
}