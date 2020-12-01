const textoEntrada = document.getElementById("envioForm");
const mensajeUl = document.getElementById("mensajeUl");


textoEntrada.addEventListener("submit", event => {
    event.preventDefault();

    let formDataElement = new FormData(event.target);
    let userInput = formDataElement.get("textoEntrada");
    let mensajeLi = crearMensaje(userInput);
    mensajeUl.appendChild(mensajeLi);

    clear();
});

const clear = () => document.getElementById("textoEntrada").value = "";


const crearMensaje = (mensaje) => {
    let mensajeLi = document.createElement("li");
    mensajeLi.className = "mensaje-usuario";
    let mensajeTextElement = document.createTextNode(mensaje);
    mensajeLi.appendChild(mensajeTextElement);

    return mensajeLi;
}

const upperCase = document.getElementById("upperCase");

upperCase.addEventListener("click", () => {

    let todosLosMensaje = document.getElementsByClassName("mensaje-usuario");

    for (let index = 0; index < todosLosMensaje.length; index++) {
        todosLosMensaje[index].style.textTransform = "capitalize";

    }

});