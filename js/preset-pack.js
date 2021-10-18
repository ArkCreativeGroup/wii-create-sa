$("#item-adder").on("click", function(e) {
    addToCart(e)
})


// Get item name
const addToCart = e => {
    e.preventDefault();
    let product = $("#prodct-name").text();
    let productImg = $("#prodct-image").attr("src");

    // let packPrice = $("#prodct-price").text();
    var stringVal = $("#prodct-price").text();
    let packPrice = parseFloat(stringVal.replace(/,/g, ''));
    let packQty = $("#prodct-qty").val();
    let totalQ = packQty * packPrice;
    let productPrice = totalQ;

    window.localStorage.setItem("purchase_item", product)
    window.localStorage.setItem("purchase_itemImg", productImg)
    window.localStorage.setItem("purchase_amount", productPrice)
    window.localStorage.setItem("purchase_qty", packQty)
    window.location.href = "/checkout";

 
}

let purchaseItem = localStorage.getItem("purchase_item");
let purchaseItemImg = localStorage.getItem("purchase_itemImg");
let purchaseItemPrice = localStorage.getItem("purchase_amount");
let purchaseItemqty = localStorage.getItem("purchase_qty");



if (window.localStorage.getItem('purchase_item') == null ){
    // if the storage item 'se-pre-con', does not exist, run the code in curly 
    // braces
    
    document.getElementById("packCart").style.display = 'none';}
    else {
    // document.getElementById('packCart').style.display="flex";
    $("#prdct-value").text(purchaseItem);
    $("#prdct-src").attr('src', purchaseItemImg);
    $("#prdct-amount").text(parseInt( purchaseItemPrice ).toLocaleString());
    // else (when above if statement is not met) hide the loader
};
    
    
    // window.localStorage.setItem('purchase_item', 'true')


$("#item-remover").on("click", function(e) {
    window.localStorage.removeItem("purchase_item")
    window.localStorage.removeItem("purchase_itemImg")
    window.localStorage.removeItem("purchase_amount")
    window.localStorage.removeItem("purchase_qty")
    e.preventDefault
});

$('.prebuiltForm').append('<input type="hidden" name=" packName" value="' + purchaseItem + '">');
$('.prebuiltForm').append('<input type="hidden" name=" pack-quantity" value="' + purchaseItemqty + '">');
// $('.simpleForm').append('<input type="hidden" name="' + item.get('id') + ' Qty" value="' + item.get('quantity') + '">');



simpleCart.bind( 'update' , function(){
    function whenEmpty() {
        if (purchaseItemPrice == null) {
            return '0'
        }else{
            return purchaseItemPrice
        }
    }
    var totalAmount = simpleCart.total() + ((parseInt( whenEmpty())) * simpleCart.taxRate()) + (parseInt( whenEmpty()));
    var taxAmount = totalAmount * 0.075;
    //const grandtotalAmount = simpleCart.grandTotal() + (parseInt( whenEmpty() ))
    const grandtotalAmount = totalAmount + taxAmount;
    
    // console.log( simpleCart.total() + (parseInt( purchaseItemPrice )) ); 
    $("#total-amount").text( '₦' + parseInt(totalAmount).toLocaleString());

    $("#tax-amount").text( '₦' + parseInt(taxAmount).toLocaleString());
    $("#grandtotal-amount").text('₦' + parseInt(grandtotalAmount).toLocaleString());
  });

// simpleCart.grandTotal();

// var final = $(".theTotal").text()
// console.log(final);

function myCartsystem() {
    var productItem = $(".wii-product li") ;
    // var product = { 
    //     name : "real",
    //     id : productItem.find(".wii-product-title").text(),
    //     price : "",
    //     quantity : "",
    //   }
    // productItem.forEach(pFunction)
    // function pFunction(item, index) {
    //     document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
    //   }
    // return productItem.size()

    var productItem = $(".wii-product li");
    var selecter = $(".wii-product-add")
    $(selecter).each(function() {
        $(this).on("click", function(){
            // // For the boolean value
            // var boolKey = $(this).data('selected');
            // // For the mammal value
            // var mammalKey = $(this).attr('id'); 


            //whe add is clicked
        
            //get the li wrapper
            pdctWrapper = $(this).parents(".wii-product-wrapper")
        
            //add selected to li wrapper
            pdctWrapper.addClass("selected")
        
            
            let pdctName = $(this).parents(".wii-product-wrapper").find(".wii-product-name").text()
        
            window.localStorage.setItem("wii-Pname", pdctName);
        
            // console.log(pdctName)
            return false
        });
        let hanme = localStorage.getItem("wii-Pname");
        $(".testing").text(hanme);
    });
    $(selecter).on("click", function(e) {

    })
    
    return true
    
}

myCartsystem();








// console.log(hanme);


// simpleCart.grandTotal(
//     return simpleCart.total() + simpleCart.tax() + simpleCart.shipping();
// );