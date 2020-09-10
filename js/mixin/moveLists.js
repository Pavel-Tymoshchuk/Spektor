// moveInst move 
export const listMove = {
    props: {
        
    },
    methods: {
        moveElements() {
            let catalogWrapper = document.querySelectorAll('.js-move-wrapper');
            catalogWrapper.forEach((mainItem) => {
                
                let catalogList = mainItem.querySelector(".js-move-list");
                let allItem = mainItem.querySelectorAll(".js-move-item");
                let item = mainItem.querySelector(".js-move-item");
                let styleElem = window.getComputedStyle(item);
                let catalogWrapperStyle = window.getComputedStyle(mainItem);
                let catalogWrapperStylePadding = parseFloat(catalogWrapperStyle.paddingLeft);
                let margin = parseFloat(styleElem.marginRight);
                
                function moveList() {
                    let fullWidthItems = 0;
                    allItem.forEach(function(item){
                        fullWidthItems += item.offsetWidth;
                    });
                    
                    let widthList = fullWidthItems + (margin * allItem.length) + catalogWrapperStylePadding + 250;
                    let step = (widthList - window.innerWidth) / window.innerWidth;
                    let flag;
                    let timerId;
                    let setTimMouseEnter;
                    
                    mainItem.addEventListener('mouseenter', function(e){
                        setTimMouseEnter = setTimeout(function(){
                            let leftMouseMove = mainItem.offsetLeft - e.clientX;
                            catalogList.setAttribute('style', `transform: translateX(${Math.floor(leftMouseMove * step)}px); transition: transform .6s`);
                        }, 200);
                        
                    });
                    
                    mainItem.addEventListener('mousemove', function(e){
                        timerId = setTimeout(function(){
                            flag = true;
                        }, 500);

                        if(flag){
                            clearTimeout(timerId);
                            clearTimeout(setTimMouseEnter);
                            let leftMouseMove = mainItem.offsetLeft - e.clientX;
                            let transition = Math.abs(leftMouseMove) / 10000;
                            catalogList.setAttribute('style', `transform: translateX(${Math.floor(leftMouseMove * step)}px); transition: transform ${transition}s`);
                        }
                    });
                    
                    mainItem.addEventListener('mouseleave', function(e){
                        flag = false;
                        clearTimeout(setTimMouseEnter);
                        catalogList.setAttribute('style', `transform: translateX(0px); transition: transform .6s`);
                    });
                }
                
                moveList();
                
                window.addEventListener('resize', function() {
                    moveList();
                });
            });
        }
    }
    
}



// moveInst move