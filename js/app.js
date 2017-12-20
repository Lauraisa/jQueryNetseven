$(document).ready(function(){
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    $("#Gato-1").click(function(evento){
        $(this).addClass("medium-kat")
        $('#Gato-1').parent().removeClass('col-xs-offset-3');
        $('#Gato-1').parent().addClass('margin');
        
    });
    $("#gato-2").click(function(evento){
        $("body").removeClass("bg-body");
        $("body").addClass("back-red");
        
    });

 });