function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let	Maximo = 10;
	let Minimo = 1;
	let Num;

	Num =	Math.round(Math.random() * (Maximo - Minimo) + Minimo);
	
	alert(Num);
	
	

}//FIN DE LA FUNCIÓN