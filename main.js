const html = document.querySelector("html");

const dado = document.querySelector(".dado"),
  carasDado = document.querySelectorAll(".contenido .contenedor-1 .caras-dado");

window.addEventListener("DOMContentLoaded", () => {
  if(window.innerWidth >= 1200) {
    html.style.setProperty("--dado-tamaño-normal", "350px");
  };

  if(window.innerWidth >= 1000 && window.innerWidth < 1200) {
    html.style.setProperty("--dado-tamaño-normal", "280px");
  };

  if(window.innerWidth > 620  && window.innerWidth <= 720) {
    html.style.setProperty("--dado-tamaño-normal", "160px");
    html.style.setProperty("--bolitas-tamaño-normal", "12px");

    html.style.setProperty("--dado-cartas-tamaño-normal", "65px");
    html.style.setProperty("--bolitas-cartas-tamaño-normal", "3px")
  };

  if(window.innerWidth > 351  && window.innerWidth <= 620) {
    html.style.setProperty("--dado-tamaño-normal", "145px");
    html.style.setProperty("--bolitas-tamaño-normal", "12px");

    html.style.setProperty("--dado-cartas-tamaño-normal", "65px");
    html.style.setProperty("--bolitas-cartas-tamaño-normal", "3px")
  };

  if(window.innerWidth <= 351) {
    html.style.setProperty("--dado-tamaño-normal", "80px");
    html.style.setProperty("--bolitas-tamaño-normal", "7px");

    html.style.setProperty("--dado-cartas-tamaño-normal", "65px");
    html.style.setProperty("--bolitas-cartas-tamaño-normal", "2px")
  };
});

  window.addEventListener("resize", () => {
    if(window.innerWidth >= 1200) {
      html.style.setProperty("--dado-tamaño-normal", "350px");
    };

    if(window.innerWidth >= 1000 && window.innerWidth < 1200) {
      html.style.setProperty("--dado-tamaño-normal", "280px");
    };

    if(window.innerWidth > 351  && window.innerWidth <= 620) {
      html.style.setProperty("--dado-tamaño-normal", "145px");
      html.style.setProperty("--bolitas-tamaño-normal", "12px");

      html.style.setProperty("--dado-cartas-tamaño-normal", "65px");
      html.style.setProperty("--bolitas-cartas-tamaño-normal", "3px")
    };

    if(window.innerWidth <= 351) {
      html.style.setProperty("--dado-tamaño-normal", "80px");
      html.style.setProperty("--bolitas-tamaño-normal", "7px");

      html.style.setProperty("--dado-cartas-tamaño-normal", "65px");
      html.style.setProperty("--bolitas-cartas-tamaño-normal", "2px")
    };
  });

carasDado.forEach(ca => {
  ca.addEventListener("click", e => {
    if(ca.matches(".contenido .contenedor-1 .uno")) {
      movimiento(dado,"0deg", "0deg");
      resaltarElementos(0);
    };

    if(ca.matches(".contenido .contenedor-1 .dos")) {
      movimiento(dado,"-90deg", "0deg");
      resaltarElementos(1);
    };

    if(ca.matches(".contenido .contenedor-1 .tres")) {
      movimiento(dado,"0deg", "90deg");
      resaltarElementos(2);
    };

    if(ca.matches(".contenido .contenedor-1 .cuatro")) {
      movimiento(dado,"0deg", "-90deg");
      resaltarElementos(3);
    };

    if(ca.matches(".contenido .contenedor-1 .cinco")) {
      movimiento(dado,"90deg", "0deg");
      resaltarElementos(4);
    };

    if(ca.matches(".contenido .contenedor-1 .seis")) {
      movimiento(dado,"0deg", "-180deg");
      resaltarElementos(5);
    };
  });
});

  function movimiento(objeto, rY, rX) {
    objeto.style.setProperty("transform", `rotateY(${rY}) rotateX(${rX})`);
  };

  function resaltarElementos(num) {
    carasDado[num].style.setProperty("background-color", "red");

    for(let i = 0; i <= carasDado.length - 1; i++) {
      if(i != num) {
        carasDado[i].style.setProperty("background-color", "purple")
      };
    };
  };

