// const productListSlaider = document.querySelector('.productList__slaider') ;
// const productListTile = document.querySelectorAll('.productList__tile');


// const leftButton = document.querySelector('.productList__arrow--left');
// const rightButton = document.querySelector('.productList__arrow--right');

// let counter = 1;
// const size = productListTile[0].clientWidth;

// productListSlaider.style.transform = 'translateX(' +(-size * counter) + 'px)';

// rightButton.addEventListener('click',()=>{
//     if(counter>= productListTile -1) return;
//     productListSlaider.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     productListSlaider.style.transform = 'translateX(' +(-size * counter) + 'px)';
    
// });

// leftButton.addEventListener('click',()=>{
//     if(counter <= 0)return;
//     productListSlaider.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     productListSlaider.style.transform = 'translateX(' +(-size * counter) + 'px)';

// });

// productListSlaider.addEventListener('transitionend', ()=>{
//    if(productListTile[counter].id === 'lastClone'){
//     productListSlaider.style.transition = "none";
//     counter = productListTile.length -2;
//     productListSlaider.style.transform = 'translateX(' +(-size * counter) + 'px)';}

//     if(productListTile[counter].id === 'firstClone'){
//         productListSlaider.style.transition = "none";
//         counter = productListTile.length - counter;
//         productListSlaider.style.transform = 'translateX(' +(-size * counter) + 'px)';
//    }
// });