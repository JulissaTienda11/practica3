function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if (  name == "Julissa" && password == "1234" ) {
       //alert("usuario y contrasena validos")
       window.open('content.html');
     }   else {
       alert("errores en el usuario o contraseña");
     }

 };