function ValidarRespuesta(){
    
    var formulario = document.getElementById("formulario");
	var nombre= document.getElementById("nombre").value;
    var correo= document.getElementById("correo").value;
    var contraseña=document.getElementById("contraseña");
    var repetircontraseña=document.getElementById("repetircontraseña");
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2") ;
    var error3 = document.getElementById("error3") ;
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7= document.getElementById("error7");
    pattern = new RegExp ("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$");
    patternN = new RegExp ("^[a-zA-ZÀ-ÿ]*$");
    
        if(nombre=="" || !patternN.test(nombre)){
            error1.style.display="block";
           document.getElementById("nombre").classList.add("input_error");
        } else{
            document.getElementById("nombre").value;
            error1.style.display="none";
        }

        if (correo==""){
            error2.style.display="block";
            error7.style.display="none";
            document.getElementById("correo").classList.add("input_error"); 
        } else if(!pattern.test(correo)){
            error7.style.display="block";
            error2.style.display="none";
            document.getElementById("correo").classList.add("input_error"); 
        }else{
            document.getElementById("correo").value;
            error7.style.display="none";
            error2.style.display="none";
        }

        if (contraseña.value ==""){
            error3.style.display="block";
            document.getElementById("contraseña").classList.add("input_error");
        }else if (contraseña.value.length<8){
            error6.style.display="block";
            error3.style.display="none";
            document.getElementById("contraseña").classList.add("input_error");
        }else{
            document.getElementById.value;
            error3.style.display="none";
            error6.style.display="none";
        }

        if (repetircontraseña.value =="" || repetircontraseña.length<8){
            error4.style.display="block";
            document.getElementById("repetircontraseña").classList.add("input_error");
        } else if (contraseña.value != repetircontraseña.value){
            error4.style.display="none";
            error5.style.display="block";
            document.getElementById("repetircontraseña").classList.add("input_error");
            formulario.reset("error");
        } else {
            document.getElementById.value;
            error4.style.display="none";
            error5.style.display="none";
        }
    

    formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    formulario.reset();
    setTimeout(() =>{
        location.reload();
    }, 500);
    alert("El formulario ha sido enviado con éxito");
    });
}