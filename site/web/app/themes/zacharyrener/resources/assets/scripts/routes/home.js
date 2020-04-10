export default {
  init() {
    // JavaScript to be fired on the home page
    let carouselImage = $('.carousel-image');
    setTimeout( ()=>{
      carouselImage.attr('style', 'background-position: bottom;');
    }, 1);

    let carouselImageVanilla = document.querySelector('.carousel-image');
      carouselImageVanilla.addEventListener('transitionend', ()=>{
        console.log('transitionend');
        if(carouselImage.attr('style') == 'background-position: bottom;')
          carouselImage.attr('style', 'background-position: top;');
        else
          carouselImage.attr('style', 'background-position: bottom;');
      });
    
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
