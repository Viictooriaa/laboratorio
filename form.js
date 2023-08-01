function validar(){
    //Validar nombre
    if (document.formValida.nombre.value.length < 5){
      alert("Ingrese un nombre valido.")
      document.formValida.nombre.focus()
      return 0; 
    }

   //Validar correo
   if (document.formValida.correo.value.length <= 5){
    alert("Ingrese un correo valido.")
    document.formValida.correo.focus()
    return 0;
  }

  //Validar direccion 
  if (document.formValida.direccion.value.length <= 5){
    alert("Ingrese una direccion.")
    document.formValida.direccion.focus()
    return 0;
  } 

  //Validar telefono 
  if (document.formValida.telefono.value.length <= 5){
    alert("Ingrese un telefono.")
    document.formValida.telefono.focus()
    return 0;
  }

   //Validar fecha nacimiento
   if (document.formValida.fecha_nacimiento.value.length <= 5){
    alert("Ingrese fecha de nacimiento.")
    document.formValida.fecha_nacimiento.focus()
    return 0;
  }

   //Validar genero
   if (document.formValida.genero.value.length <= 5){
    alert("Ingrese su genero.")
    document.formValida.genero.focus()
    return 0;
  }

   //Validar password
   if (document.formValida.password.value.length <= 5){
    alert("Ingrese su contraseña.")
    document.formValida.genero.focus()
    return 0;
  }

   //Validar tarjeta
   if (document.formValida.tarjeta.value.length <= 5){
    alert("Ingrese no. valido de tarjeta.")
    document.formValida.tarjeta.focus()
    return 0;
  }

   //Validar fecha
   if (document.formValida.expiracion.value.length <= 5){
    alert("Ingrese fecha de expiracion.")
    document.formValida.expiracion.focus()
    return 0;
  }


  //Validar titular
  if (document.formValida.titular.value.length <= 5){
    alert("Ingrese nombre del titular.")
    document.formValida.titular.focus()
    return 0;
  }


  
    //Envia formulario
    alert("Muchas gracias por enviar el formulario");
    document.formValida.submit();
  }
  