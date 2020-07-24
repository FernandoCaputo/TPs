function mostrar()
{
	let vMaximo = 10;
	let vMinimno = 1;
	let vNum;

	vNum = Math.round( Math.random() * (vMaximo - vMinimno) + vMinimno);

	if (vNum == 9 || vNum == 10) 

	{
		alert (vNum + " Excelente.");

	}
	else if (vNum >4 && vNum <= 8) 
	// otra opción else if (vNum =>4)

	{
		alert (vNum +  " APROBÓ.");
	} 

	else 
	{
		alert(vNum + " Vamos, la proxima se puede");
	}

}

/*
function mostrar()
{
	let vNota;
	vNota = Math.round(Math.random() * 9 + 1);
	//Genero el número RANDOM entre 1 y 10 
	if(vNota >= 9) {
		alert("Excelente nota: "+vNota);
	} else if (vNota >= 4) {
		alert("Aprobo nota: "+vNota);
	} else {
		alert("Vamos, la proxima se puede nota: "+vNota);
	}

}
//FIN DE LA FUNCIÓN
*/