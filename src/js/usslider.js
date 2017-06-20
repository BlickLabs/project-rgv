$('.us-slider').slick({
  prevArrow: '.left-arrow img',
  nextArrow: '.right-arrow img',
  dots: true,
  customPaging: function(slider, i) {
    return $('<button type="button" data-role="none" role="button" tabindex="0" />');
  }
});