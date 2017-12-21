$(document).ready(function () {
    //código a ejecutar cuando el DOM está listo para recibir instrucciones.
    $("#Gato-1").click(function (evento) {
        $('#Gato-1').toggleClass("medium-kat");
        $('#Gato-1').parent().addClass('margin');
        $('#Gato-1').parent().toggleClass("nieve");

    });

    // $( document.body ).click(function() {
    //     $( "div:hidden:first" ).fadeIn( "slow" );
    //   });
    /*trabajando bg y animacion de cat */
    $(".bg-body").click(function (evento) {
        $(".bg-body").toggleClass("back-red");
        // El gatito desaparece

    });
    $(".box-cat").click(function () {
        $("#gato-2").slideToggle("slow", function () {
            $(function () {
                setTimeout(function () {
                    $('.fly-in-text').toggleClass('hidden');
                }, 500);

            });
        });

        $("#gato-2").show("slow", function () {});

    });

    $(".bg-body").click(function (evento) {
        $(".bg-body").toggleClass("gato-3")
        $("#gato-3").toggleClass("transition")

    });

 /*creando elemento extra*/
 $('<div></div>')
 .prependTo(".container")
 .addClass("view-LargeDevicesDes");



});

 /*cambio de colores */
$(document).ready(function() {
    function changeColor(){
        if ($('body').hasClass('.bg-body')) {
            $('body').removeClass('.bg-body');
            $('body').addClass('.back-red');
            $('h1').removeClass('green');
            $('h1').addClass('red');
        }
        else {
            $('body').removeClass('.back-red');
            $('body').addClass('.bg-body');
            $('h1').removeClass('red');
            $('h1').addClass('green');
        }
    }

    setInterval(changeColor, 1000);
});
