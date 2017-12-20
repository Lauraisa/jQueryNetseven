$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    $("#Gato-1").click(function(evento){
        $('#Gato-1').toggleClass("medium-kat");
        $('#Gato-1').parent().addClass('margin');
        $('#Gato-1').parent().toggleClass("nieve");

    });

    // $( document.body ).click(function() {
    //     $( "div:hidden:first" ).fadeIn( "slow" );
    //   });
    /*trabajando bg y animacion de cat */
    $(".bg-mobil").click(function(evento){
        $(".bg-mobil").toggleClass("back-red");
        // El gatito desaparece

    });
    $( ".box-cat" ).click(function() {
        $( "#gato-2" ).slideToggle( "slow", function() {
          
        });
        $( "#gato-2" ).show( "slow", function() {
        });
        
    
      });
    

 });