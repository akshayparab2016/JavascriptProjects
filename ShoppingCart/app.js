// Date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/* for bg color change on scroll
$(window).scroll(function () {
if ($(window).scrollTop() >= 10) {
$('body').css('background','lightblue');
} else {
$('body').css('background','transparent');
}
});  */

// for navbar scroll transparency
 $(window).scroll(function() {
  var offset = $(window).scrollTop();
  $('.navbar').toggleClass('trans', offset > 200);
});



// code
var itemCount = 0;
var priceTotal = 0;

// Add Item to Cart
$('.add').click(function (){
  itemCount ++;

$('#itemCount').text(itemCount).css('display', 'block');

$(this).siblings().clone().appendTo('#cartItems').append('<br><br><button class="removeItem btn btn-danger">Remove Item</button>');

// Calculate Total Price
var price = parseInt($(this).siblings().find('.price').text()); 
priceTotal += price; // priceTotal = priceTotal + price;
$('#cartTotal').text("Total: ₹ " + priceTotal);
    }); 



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').slideToggle();
});


// Empty Cart
$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Total: ₹ " + priceTotal);
}); 



// Remove Item From Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').text(itemCount);

// Remove Cost of Deleted Item from Total Price
var price = parseInt($(this).siblings().find('.price').text());
priceTotal -= price; // priceTotal = priceTotal - price
$('#cartTotal').text("Total: ₹ " + priceTotal);

if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});


// Prevent empty cart items from proceed to chckout    
$(".checkout").click(function(){
    if (priceTotal === 0){
        event.preventDefault();
// event.currentTarget.innerHTML = 'Click event prevented';
        alert("You must add some items in your cart to proceed");
        }
    }); 

// Search engine

sessionStorage.setItem("key", "priceTotal");





