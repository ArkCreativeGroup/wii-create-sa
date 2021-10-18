jQuery('.item_add').click(function() {

  // $('html, body').animate({
  //   scrollTop: 0
  // }, 100);

  $('#cart-menu').addClass('uk-animation-shake');
  setTimeout(function() { 
    $("#cart-menu").removeClass("uk-animation-shake");
  }, 1000);

});
