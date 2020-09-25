Vue.use(VueLazyload)

import {listMove} from './mixin/moveLists.js'

const app = new Vue({
    el: "#app",
    data: {
        windowWidth: 0,
    },
    mixins: [listMove],
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
            if(this.windowWidth > 1210) {
                this.moveElements();
            }
            this.initialSlider();
        },1000);
    }
});