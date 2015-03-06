
$(document).ready(function() {
 
$('.check-box').click(function() {
    $(this).toggleClass("checked");
})

$('.arrow').click(function(){
     $('.dropdown').toggle();
 })
$('.dropdown-items').click(function(){
    var theme = $(this).attr('data-option');
    $('.input.select').val(theme);
    $('.dropdown').hide();
})


})


