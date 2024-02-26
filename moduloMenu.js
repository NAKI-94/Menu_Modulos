const btn = document.querySelector("#btn");
const menu = document.getElementById("menu"); 


export function mostrarMenu(event) {
   event.preventDefault();
    switch(menu.selectedIndex){
    case 1:
        mostrarPrecio("img/helado.png", "imagen de helado", "helado", "$5.000");
        break;
    
    case 2:
        mostrarPrecio("img/hamburguesa.png", "imagen de hamburguesa", "helado", "$5.000");
        break;
    
    case 3:
        mostrarPrecio("img/perro.png", "imagen de perro caliente", "perro caliente", "$15.000");
        break;
    
    case 4:
        mostrarPrecio("img/ensalada.png", "imagen de ensalada", "ensalada", "$10.000");
        break;
    
    default:
        alert("Debes seleccionar una opcion del menu");
        break;
    } 
};



