export default {
  init() {
    // JavaScript to be fired on all pages
    let win = $(window);
    let ctaButton = $('header .cta');
    win.scroll(()=>{
      if(win.scrollTop() >= 123){
        ctaButton.addClass('prepareToAnimate');
        ctaButton.addClass('fixedPosition');
      } else {
        if(ctaButton.hasClass('fixedPosition'))
          ctaButton.removeClass('prepareToAnimate');
          ctaButton.removeClass('fixedPosition');
      }
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
