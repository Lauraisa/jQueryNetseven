$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    $("#Gato-1").click(function(evento){
        $('#Gato-1').addClass("medium-kat")
        $('#Gato-1').parent().removeClass('col-xs-offset-3');
        $('#Gato-1').parent().addClass('margin');
        
    });
    /*trabajando bg y animacion de cat */
    $(".bg-mobil").click(function(evento){
        $(".bg-mobil").toggleClass("back-red");
        // El gatito desaparece

    });
    $( ".box-cat" ).click(function() {
        $( "#gato-2" ).fadeOut( "slow", function() {
          // El gatito desaparece
        });
        $( "#gato-2" ).show( "slow", function() {
        });
        // El gatito aparece

        /* $( "#gatgif" ).show( "slow", function() {
        });
        // El gatito aparece

      }); para modificar*/
    
      });
    

 });