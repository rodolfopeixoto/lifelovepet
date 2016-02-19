var ready;
ready = function() {

$(function(){
$('.clickable').on('click',function(){
    var effect = $(this).data('effect');
        $(this).closest('p.text-center.alert.alert-success')[effect]();
	})
})

$(function(){
$('.clickable').on('click',function(){
    var effect = $(this).data('effect');
        $(this).closest('p.text-center.alert')[effect]();
	})
})


};

$(document).ready(ready);
$(document).on('page:load', ready);