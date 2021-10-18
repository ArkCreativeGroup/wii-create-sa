simpleCart.ready(function() {
  simpleCart.each(function(item, x) {
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Name" value="' + item.get('name') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Color" value="' + item.get('color') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Size" value="' + item.get('size') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Qty" value="' + item.get('quantity') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Price" value="' + item.get('price') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Total" value="' + item.get('total') + '">');
  });
});


bulkCart.ready(function() {
  bulkCart.each(function(item, x) {
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Name" value="' + item.get('name') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Color" value="' + item.get('color') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Size" value="' + item.get('size') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Qty" value="' + item.get('quantity') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Price" value="' + item.get('price') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Total" value="' + item.get('total') + '">');
  });
});


buildCart.ready(function() {
  buildCart.each(function(item, x) {
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Name" value="' + item.get('name') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Color" value="' + item.get('color') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Size" value="' + item.get('size') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Qty" value="' + item.get('quantity') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Price" value="' + item.get('price') + '">');
    $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Total" value="' + item.get('total') + '">');
  });
});



