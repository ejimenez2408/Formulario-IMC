function validar(){
	var id, nombre, apellido, edad, genero, estatura, peso, tabla, filaactual, nuevafila, celda1, celda2, celda3, celda4, celda5, celda6, celda7, celda8, celda9;

	id = document.getElementById("identificacion").value;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	edad = document.getElementById("edad").value;
	genero = document.getElementById("genero").value;
	estatura = document.getElementById("estatura").value;
	peso = document.getElementById("peso").value;

	if(id == "" || nombre == "" ||apellido == "" || edad == "" || genero == "" || estatura == "" || peso == ""){
		alert("Uno o más campos no fueron diligenciados");
	}else{
		Calcular();
		tabla = document.getElementById("tb");
		filaactual = document.getElementById("tb").rows.length;
		nuevafila = tabla.insertRow(filaactual);
		celda1 = nuevafila.insertCell(0);
		celda2 = nuevafila.insertCell(1);
		celda3 = nuevafila.insertCell(2);
		celda4 = nuevafila.insertCell(3);
		celda5 = nuevafila.insertCell(4);
		celda6 = nuevafila.insertCell(5);
		celda7 = nuevafila.insertCell(6);
		celda8 = nuevafila.insertCell(7);
		celda9 = nuevafila.insertCell(8);

		celda1.innerHTML = id;
		celda2.innerHTML = nombre;
		celda3.innerHTML = apellido;
		celda4.innerHTML = edad;
		celda5.innerHTML = genero;
		celda6.innerHTML = estatura;
		celda7.innerHTML = peso;
		celda8.innerHTML = imcc;
		celda9.innerHTML = resultado;

		if(imc < 16.00){
		celda9.style.background ="yellow";	
		}
		if(imc >= 16.00 && imc <= 16.99){
		celda9.style.background ="yellow";
		}
		if(imc >= 17.00 && imc <= 18.49	){
		celda9.style.background ="yellow";
		}
		if(imc >= 18.50 && imc <= 24.99){
		celda9.style.background ="green";
		}
		if( imc >= 25.00 && imc <= 29.99){
		celda9.style.background ="red";	
		}
		if(imc >= 30.00 && imc <= 34.99){
		celda9.style.background ="red";
		}
		if (imc >= 35.00 && imc <= 40.00) {
		celda9.style.background ="red";
		}
		if(imc > 40.00){
		celda9.style.background ="red";
		}

		document.getElementById("identificacion").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value="";
		document.getElementById("edad").value = "";
		document.getElementById("genero").value = "";
		document.getElementById("estatura").value = "";
		document.getElementById("peso").value = "";	
	}
}

function Calcular(estatura,peso){
	estatura=document.getElementById("estatura").value;
	peso=document.getElementById("peso").value;
	imc = peso/(estatura*estatura);
	imcc = imc.toFixed(2);

	if(imc < 16.00){
		resultado = "Delgadez Severa";	
	}
	if(imc >= 16.00 && imc <= 16.99){
		resultado="Delgadez Moderada";
	}
	if(imc >= 17.00 && imc <= 18.49	){
		resultado="Delgadez Leve";
	}
	if(imc >= 18.50 && imc <= 24.99){
		resultado="Peso Normal";
	}
	if( imc >= 25.00 && imc <= 29.99){
		resultado="Sobrepeso";	
	}
	if(imc >= 30.00 && imc <= 34.99){
		resultado="Obeso: Tipo I";
	}
	if (imc >= 35.00 && imc <= 40.00) {
		resultado="Obeso: Tipo II";	
	}
	if(imc > 40.00){
		resultado="Obeso: Tipo III"	
	}
	return resultado;
}