/**********************************************************************************************/
/*    Web del Romanticismo - hoja de estilo de autores                                        */
/*   Autor: Daniel Luque Gallardo                                                             */
/*     Versión 1.0 - 24/10/2022                                                               */
/**********************************************************************************************/

/******************** js responsive de topnav***************************/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }