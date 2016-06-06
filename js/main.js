//////////////Variables Globales//////////////
var numeroAzar=0;//valor de random
var puntaje=0;//Score
var intentos=0;//Oportunidades de adivinar

//Random images
var imagenes= [
  "adriana.JPG",   "alma.JPG",        "ana.JPG",       "analy.JPG",    "areli.JPG",    "beatriz.JPG",
  "cecilia.JPG",   "claudia.JPG",     "daniela.JPG",   "elisa.JPG",    "evelyn.JPG",   "gabriela.JPG",
  "grissel.JPG",   "guadalupe.JPG",   "heredia.JPG",   "johana.JPG",   "joyce.JPG",    "karen.JPG",
  "karla.JPG",     "leslie.JPG",      "milca.JPG",     "mishel.JPG",   "monica.JPG",   "naibit.JPG",
  "nayeli.JPG",    "nelly.JPG",       "ofelia.JPG",    "reyna.JPG",    "ruth.JPG",     "ruthdj.JPG",  
  "sandia.JPG",    "sandra.JPG",      "sharon.JPG",    "tayde.JPG",    "vianey.JPG",   "zazil.JPG" 
];
//comparar input
var nombres= [
  "adriana",   "alma",        "ana",       "analy",    "areli",    "beatriz",
  "cecilia",   "claudia",     "daniela",   "elisa",    "evelyn",   "gabriela",
  "grissel",   "guadalupe",   "heredia",   "johana",   "joyce",    "karen",
  "karla",     "leslie",      "milca",     "mishel",   "monica",   "naibit",
  "nayeli",    "nelly",       "ofelia",    "reyna",    "ruth",     "ruthdj",  
  "sandia",    "sandra",      "sharon",    "tayde",    "vianey",   "zazil" 
];

///////////////FUNCIONES///////////////
//Genera un numero al azar
function randomImage(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
};

function nuevaJugada(){
  if (nombres.length>0) {
  numeroAzar=randomImage(0, nombres.length);
  var imagen="fotos/" + imagenes[numeroAzar];
  $("#img-alumna").attr("src", imagen);
}else{
  alert("Fin del Juego!");
}
};
     
$( document ).ready(function() {
  console.log("ready!");
  //Boton Instrucciones
  $( "#btnInstructions" ).click(function() {
    $( ".instructions" ).slideToggle( "slow" );
  });
  //Dropdown Elige tu sede
  $( ".dropdown-toggle" ).click(function() {
    $( ".dropdown-menu" ).slideToggle( "slow" );
  })

$("select[name=selectorPais]").change(function(){
        alert("Tu sede es: "+ $("select[name=selectorPais]").val());
        $("input[name=mexico]").val($(this).val());
      nuevaJugada();
      });

  //COMPROBAR imagen Boton
  $("#btnComprobar").click(function(){

    var nombre=$("#inputText").val();
    console.log("El usuario escribio : " + nombre);
    $("#inputText").val("");//limpiar input

    var nombreAdivinar=nombres[numeroAzar];
    console.log("El nombre correcto es: " + nombreAdivinar);

    if (nombre==nombreAdivinar) {

      //Quitar elemento para  que no se repita
      nombres.splice(numeroAzar,1);
      imagenes.splice(numeroAzar,1);

      //Adivino MARCADOR      
      console.log(puntaje);
      nuevaJugada(); 
      puntaje= puntaje + 5;
       //Imprimir
      $("#puntaje").text(puntaje);
      alert("Correcto!!! \n + 5 pts ");

    } else {
      //Fallo MARCADOR
      puntaje= puntaje - 1; //
      $("#puntaje").text(puntaje);
      intentos=intentos+1;
      alert("Error!!! \n Su nombre no es: " + nombre + "\n Pierdes 1pt" + "\n Restan "+ (5 - intentos) + " intentos");    
      
    }
    if(intentos==5) {
          alert("No hay mas intentos!!! \n Su nombre es: " + nombreAdivinar);
          //Quitar elemento para  que no se repita
          nombres.splice(numeroAzar,1);
          imagenes.splice(numeroAzar,1);
        }  
  });

  
}); ///////////CIERRE GLOBAL/////////////////