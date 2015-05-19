// $una is now an alias to the jQuery function; creating the new alias is optional.
var $una = jQuery.noConflict();

//variable para almacenar el mensaje de validacion del formulario
var msg = "";
var domains = ['hotmail.com', 'gmail.com', 'aol.com'];
var topLevelDomains = ["com", "net", "org"];

//Tooltip initialize
$una(document).ready(function() {
    $una('[data-toggle=tooltip]').tooltip();
});

$una('#email').on('blur', function(event) {
  $una(this).mailcheck({
    domains: domains,                       // optional
    topLevelDomains: topLevelDomains,       // optional
    suggested: function(element, suggestion) {
      // callback code
      $una('#sugerencia').html('<span style="color:red">Te refieres a <b><i>' + suggestion.full + '</b></i>?</span>');
    },
    empty: function(element) {
      // callback code
      $una('#sugerencia').html('<span style="color:green">Sin Sugerencias</span>');
    }
  });
});

$una( "#datepicker" ).datepicker({
	inline: true,
	showOtherMonths: true,
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    changeYear: true,
	autoSize: true,
	monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
	showAnim: "fold"
});


