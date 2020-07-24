/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var num1;
    var num2;
    var num3;
    var result;

    num1    =   parseInt(document.getElementById("txtIdPrecioUno").value);
    num2    =   parseInt(document.getElementById("txtIdPrecioDos").value);
    num3    =   parseInt(document.getElementById("txtIdPrecioTres").value);

    result  =   num1+num2+num3

    alert(`El precio es ${result}`);

	
}
function Promedio () 
{

    var num1;
    var num2;
    var num3;
    var result;

    num1    =   parseInt(document.getElementById("txtIdPrecioUno").value);
    num2    =   parseInt(document.getElementById("txtIdPrecioDos").value);
    num3    =   parseInt(document.getElementById("txtIdPrecioTres").value);

    result  =   num1+num2+num3

    alert("El promedio es "+(result/3).toFixed(2));
	
}
function PrecioFinal () 
{

    var num1;
    var num2;
    var num3;
    var result;
    var result2;

    num1    =   parseInt(document.getElementById("txtIdPrecioUno").value);
    num2    =   parseInt(document.getElementById("txtIdPrecioDos").value);
    num3    =   parseInt(document.getElementById("txtIdPrecioTres").value);

    result  =   num1+num2+num3;
    result2 =   result * 1.21;

    alert("El precio final es de "+result2);
	
}