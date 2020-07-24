function mostrar()
{
let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

if (edad < 13)
{
	alert("Es Niño");

}
else if(edad < 18)
{
	alert("Es adolecente");
}
else
{

	alert("Es Mayor");

}



}//FIN DE LA FUNCIÓN