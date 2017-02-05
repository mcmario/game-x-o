var k1=0;
var k2=0;
function perevirkx(next,numb){
    
   if(($(".field").eq(0).text()==next)&&($(".field").eq(1).text()==next)&&($(".field").eq(2).text()==next)){
      if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(0).css({
           background:"red"
       })
        $('.field').eq(1).css({
           background:"red"
       })
         $('.field').eq(2).css({
           background:"red"
       })
         $("#text2").text("Player"+numb+"win");
       
   }
       if(($(".field").eq(5).text()==next)&&($(".field").eq(3).text()==next)&&($(".field").eq(4).text()==next)){
             if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(3).css({
           background:"red"
       })
        $('.field').eq(4).css({
           background:"red"
       })
         $('.field').eq(5).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   }
       if(($(".field").eq(6).text()==next)&&($(".field").eq(7).text()==next)&&($(".field").eq(8).text()==next)){
             if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(6).css({
           background:"red"
       })
        $('.field').eq(7).css({
           background:"red"
       })
         $('.field').eq(8).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   }
       if(($(".field").eq(0).text()==next)&&($(".field").eq(3).text()==next)&&($(".field").eq(6).text()==next)){
             if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(0).css({
           background:"red"
       })
        $('.field').eq(3).css({
           background:"red"
       })
         $('.field').eq(6).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   } 
       if(($(".field").eq(1).text()==next)&&($(".field").eq(4).text()==next)&&($(".field").eq(7).text()==next)){
             if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(1).css({
           background:"red"
       })
        $('.field').eq(4).css({
           background:"red"
       })
         $('.field').eq(7).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   } 
        if(($(".field").eq(2).text()==next)&&($(".field").eq(5).text()==next)&&($(".field").eq(8).text()==next)){
              if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(2).css({
           background:"red"
       })
       
        $('.field').eq(5).css({
           background:"red"
       })
         $('.field').eq(8).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   }
        if(($(".field").eq(0).text()==next)&&($(".field").eq(4).text()==next)&&($(".field").eq(8).text()==next)){
              if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(0).css({
           background:"red"
       })
        $('.field').eq(4).css({
           background:"red"
       })
         $('.field').eq(8).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   }
        if(($(".field").eq(2).text()==next)&&($(".field").eq(4).text()==next)&&($(".field").eq(6).text()==next)){
              if(numb==1){k1++;
            $("#rez1").text(k1);     
                 }
       if(numb==2){
                     k2++;
                     $('#rez2').text(k2)
                 }
       $('.field').eq(2).css({
           background:"red"
       })
        $('.field').eq(4).css({
           background:"red"
       })
         $('.field').eq(6).css({
           background:"red"
       })
          $("#text2").text("Player"+numb+"win");
   }
}



var flag=0;
var x="x";
var o="o";

$('.field').click(function(){
    if(flag==0){
        $(this).text("x");
         perevirkx(x,1) ;
        flag=1;
        $("#text").text("Ходить Player2");
    }else
    if(flag==1){
        $(this).text("o");
        perevirkx(o,2) ;
        flag=0;
         $("#text").text("Ходить Player1");
    }
})


$('button').click(function(){
     $("#text2").text("");
   for(var i=0;i<9;i++){
       $(".field").eq(i).text('');
       $('.field').css({
           background:"blue"
       })
   }
})
