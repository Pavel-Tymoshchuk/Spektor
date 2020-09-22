Vue.use(VueLazyload)

import {sliderOneCard} from './mixin/sliderOneCard.js'

const app = new Vue({
    el: "#app",
    data: {
        windowWidth: 0,
    },
    mixins: [sliderOneCard],
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