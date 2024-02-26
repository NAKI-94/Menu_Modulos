

import {mostrarPrecio} from "./script.js";

btn.addEventListener("click",mostrarPrecio);
import { mostrarMenu } from './moduloMenu.js';
btn.addEventListener("click", (event) => mostrarMenu(event));

mostrarMenu();
mostrarPrecio();