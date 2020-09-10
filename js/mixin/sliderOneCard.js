// moveInst move 
export const sliderOneCard = {
    props: {
        
    },
    methods: {
        initialSlider() {
            let arrows = document.querySelectorAll(".js-arrows");
            for(var i = 0;arrows.length > i; i++) {
                let slider = arrows[i].closest(".js-slider");
                let arrowNext = arrows[i].querySelector('.js-next');
                let arrowPrev = arrows[i].querySelector('.js-prev');
                let allItems = slider.querySelectorAll('.js-slider-item');
                
                function setCalcSlider(activeElem) {
                    let calcWrapper = document.querySelector('.js-calc-slider');
                    let valueCalc = activeElem.dataset.index;
                    calcWrapper.innerHTML = valueCalc < 9 ? "0" + valueCalc: valueCalc;
                }
                
                function autoPlay() {
                    let progressLine = slider.querySelector('.js-progress-line');
                    let counter = 0;
                    setInterval(() => {
                        if(counter > 100) {
                            counter = 0;
                            arrowNext.click();
                        }
                        counter++;
                        progressLine.setAttribute('style', `stroke-dashoffset: calc(100 - (100 * ${counter}) / 100);`)
                    }, 50);
                }
                
                // autoPlay();
                
                setCalcSlider(slider.querySelector('.js-slider-item.show'));
                
                arrowNext.addEventListener('click', function() {
                    let itemShow = slider.querySelector('.js-slider-item.show');
                    
                    if(itemShow.nextElementSibling == null) {
                        itemShow.classList.remove('show');
                        allItems[0].classList.add('show');
                        setCalcSlider(allItems[0]);
                        return;
                    }
                    
                    itemShow.nextElementSibling.classList.add('show');
                    itemShow.classList.remove('show');
                    
                    setCalcSlider(itemShow.nextElementSibling);
                });
                
                arrowPrev.addEventListener('click', function() {
                    let itemShow = slider.querySelector('.js-slider-item.show');
                    
                    if(itemShow.previousElementSibling == null) {
                        itemShow.classList.remove('show');
                        allItems[allItems.length - 1].classList.add('show');
                        setCalcSlider(allItems[allItems.length - 1]);
                        return;
                    }
                    
                    itemShow.previousElementSibling.classList.add('show');
                    itemShow.classList.remove('show');
                    
                    setCalcSlider(itemShow.previousElementSibling);
                });

                var startPointX;
                var startPointY;
                slider.addEventListener("touchstart", function(event) {
                    startPointX = event.changedTouches[0].screenX;
                    startPointY = event.changedTouches[0].screenY;
                }, false);
                slider.addEventListener("touchend", function(event){
                    var endPointX = event.changedTouches[0].screenX;
                    var endPointY = event.changedTouches[0].screenY;
                    
                    if(startPointX - endPointX > 40) {
                        arrowNext.click();
                    } else if(endPointX - startPointX > 40) {
                        arrowPrev.click();
                    }
                }, false);
            }
        }
    }
    
}



// moveInst move