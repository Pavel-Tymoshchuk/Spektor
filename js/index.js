Vue.use(VueLazyload)

import {listMove} from './mixin/moveLists.js'
import {sliderOneCard} from './mixin/sliderOneCard.js'

const app = new Vue({
    el: "#app",
    data: {
        windowWidth: 0,
    },
    mixins: [listMove,sliderOneCard],
    methods: {
    },
    components: {
    },
    mounted() {
        
        // Set window width
        
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
        
        setTimeout(() =>{
            this.moveElements();
            this.initialSlider();
        },1000);
    }
});