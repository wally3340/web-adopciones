function validar(event) {
    event.preventDefault();
  
    let nombre = document.getElementById("firstname");
    let apellido = document.getElementById("lastname");
    let direccion = document.getElementById("street");
    let zipcode = document.getElementById("zipcode");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let error = false;
  
    document.getElementById("validar_nombre").innerHTML = "";
    document.getElementById("validar_apellido").innerHTML = "";
    document.getElementById("validar_street").innerHTML ="";
    document.getElementById("validar_zipcode").innerHTML = "";
    document.getElementById("validar_telefono").innerHTML = "";
    document.getElementById("validar_email").innerHTML = "";
  
    if (nombre.value === "") {
      document.getElementById("validar_nombre").innerHTML = "Debe completar su nombre";
      error = true;
      nombre.focus();
    }
  
    if (apellido.value === "") {
      document.getElementById("validar_apellido").innerHTML = "Debe completar su apellido";
      error = true;
      apellido.focus();
    }

    if (direccion.value === "") {
        document.getElementById("validar_street").innerHTML = "Debe completar su dirección.";
        error = true;
        direccion.focus();
      }
  
    if (zipcode.value.length < 4) {
      document.getElementById("validar_zipcode").innerHTML = "Debe completar el código postal con al menos 4 caracteres.";
      error = true;
      zipcode.focus();
    }
  
    if (telefono.value.length < 10) {
      document.getElementById("validar_telefono").innerHTML = "Debe completar el teléfono con al menos 10 caracteres.";
      error = true;
      telefono.focus();
    }
  
    if (!validEmail.test(email.value)) {
      document.getElementById("validar_email").innerHTML = "Ingrese un formato de email válido";
      error = true;
      email.focus();
    }
  
    if (!error) {
      alert("Datos enviados");
    
      nombre.value = "";
      apellido.value = "";
     direccion.value="";
      zipcode.value = "";
      telefono.value = "";
      email.value = "";
    }
  }