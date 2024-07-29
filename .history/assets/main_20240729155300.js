


$(".btn").click(function(){
    var spin = (Math.floor((Math.random() * 10) + 1)) * 36;
  
  
                     $(".wheel").rotate({
                          angle: 0,
                          animateTo: 720 + spin,
                          duration: 6000
                      });
                      setTimeout(function(){
                          $(".wheel").stopRotate();
                      }, 1000);
            
     // $(this).removeClass("wheel-" + spin);
    // console.log(spin);
    // $(".wheel").addClass("wheel-" + spin);
    // $(".wheel").css({"tra": "yellow", "font-size": "200%"});
}); 