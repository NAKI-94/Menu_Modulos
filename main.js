
import { mostrarMenu } from './moduloMenu.js';
import {mostrarPrecio} from "./script.js";

btn.addEventListener("click",mostrarPrecio);

// este me salia en ayuda para corregirlo pero nada 
btn.addEventListener("click", (event) => mostrarMenu(event));

mostrarMenu();
mostrarPrecio();