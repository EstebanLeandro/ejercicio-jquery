//La calculadora debe realizar el cuadrado de un numero

//1. recuperar la referencia del buton utilizando $
//2. agregar el evento click al buton
//3. crear la funcion para realizar el calculo 
//4. el resultado se debe mostrar en el elemento adecuado


//recuperar elemento
$("#btn1").click(function(ev){
	ev.preventDefault(); 
	//evita que el formulario se envie al servidor

      //logica para resolver el problema
      //1. recuperar lo que ingreso el usuario y guardar en una variable 
      //2. realizar el calculo y guardadr en otra variable
      let numero = $("#n1").val();
      let resultado =  Math.pow(numero,2);

      $(".res1").css("borderColor","green");

      console.log(resultado);

      $(".res1").html(`${numero}<sup>2</sup> = ${resultado}`);

});


//segundo section //
$("#btn2").click(function(ev){
      ev.preventDefault();

let palabra = $("#palabra").val();
console.log(palabra.length);

$(".res2").text(palabra.length);

})


