function saludar()
{
	var edad=document.getElementById("edad").value;
	var nombre=document.getElementById("nombre").value;
	if(edad>17)
	{
		alert(nombre+"no cumples con la mayoria de edad");
	}
	else
	{
		alert(nombre+"cumples con la mayoria de edad");
	}
}