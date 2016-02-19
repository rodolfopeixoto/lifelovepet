var ready = function () {

function nextTab(elem, number) {
    $(elem).next().find('a[data-toggle="tab"]').click();
    $(".connecting-line").css("background-color","#FF6565");
      if(number == 2)
        $(".connecting-line2").css("background-color","#FF6565");
 
}
function prevTab(elem, number) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
    $(".connecting-line").css("background-color","#A5A5A5");
      if(number == 2)
        $(".connecting-line2").css("background-color","#A5A5A5");
}



   var count = 0;

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active, 0);
        count++;
         if(count == 2)
            nextTab($active, 2);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active, 0);
        count--;
         if(count < 2) 
          prevTab($active, 2);
    });
};

$(document).ready(ready);
$(document).on('page:load', ready);