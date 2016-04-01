

  $(document).ready(function(){


     //Select radio

    
    $("input[name$='breed']").click(function(){
       var value = $(this).val();

       $("div.breeds").hide();
       $("#Breads" + value).show();
    });

});

