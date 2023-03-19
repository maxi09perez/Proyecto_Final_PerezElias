const nombre = document.getElementById("nombre")
const email = document.getElementById("e-mail")
const comentario = document.getElementById("comentario")
const navToggle = document.getElementById("nav-toggle")
const ul = document.getElementById("list_nav")

document.getElementById("bot").addEventListener("click",function(){
    let texto = ""
    let val_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(nombre.value.length < 1 || email.value.length < 1 || comentario.value.length <1){
        texto = 'Error hay campos sin completar!'
    } else if(!val_email.test(email.value)){
        texto = 'El e-mail no es válido!'
    } else {
        texto = 'Se ha enviado su mensaje con éxito!'
    }

    document.getElementById("demo").innerHTML = texto;
    document.getElementById("demo").style.marginTop = "0.5rem";
})

document.getElementById("bot-resf").addEventListener("click",function(){
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo").style.marginTop = "0";
})

document.getElementById("phone").addEventListener("mousemove",function(){
    document.getElementById("datos").innerHTML = "Número Telefónico";
    document.getElementById("dat_milo").innerHTML = "(464) 373-3983";
})

document.getElementById("correo").addEventListener("mousemove",function(){
    document.getElementById("datos").innerHTML = "Mi E-mail";
    document.getElementById("dat_milo").innerHTML = "milo.ovi@email.com";
})

document.getElementById("calendar").addEventListener("mousemove",function(){
    document.getElementById("datos").innerHTML = "Fecha de Nacimiento";
    document.getElementById("dat_milo").innerHTML = "5/2/1999";
})

document.getElementById("location").addEventListener("mousemove",function(){
    document.getElementById("datos").innerHTML = "Locación";
    document.getElementById("dat_milo").innerHTML = "Córdoba, Argentina";
})

navToggle.addEventListener("click",function(){
    if(ul.style.right == "0%"){
        ul.style.right = "-100%";
    } else {
        ul.style.right = "0%";
    }
})

function volver(){
    ul.style.right = "-100%";
}

document.getElementById("contac").addEventListener("click",volver)

document.getElementById("experiencia").addEventListener("click",volver)

document.getElementById("sobre_mi").addEventListener("click",volver)

document.getElementById("inicio").addEventListener("click",volver)