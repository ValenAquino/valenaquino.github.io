//entradas
const form = document.getElementById("form");
const inputPrecio = document.getElementById("precio");
const inputDescuento = document.getElementById("descuento");
//salidas
const precioFinal = document.getElementById("precioFinal");
const descuentoFinal = document.getElementById("descuentoFinal");
const btn = document.getElementById("btnSubmit");
//containers
const divRespuesta = document.querySelector(".respuesta");
const formContainer = document.querySelector(".form-container");

//funciones

function validacionFormulario(precio, descuento) {
    if(!isNaN(precio)) {
        if(!isNaN(descuento)) {
            if(descuento < 0 || descuento > 100) {
                alert("Has introducido un porcentaje erroneo. Los porcentajes van desde 0 a 100")
                return false;
            }
            else{
                return true;
            }
        }
        else {
            alert("Has introducido un porcentaje de descuento erróneo")
            return false;
        }
    }
    alert("Has introducido un precio erróneo.");
    return false;
}

function calcularResultado(precio, descuento) {
    let precioFinal, valorDescontado;

    valorDescontado = precio * (descuento / 100);
    precioFinal = precio - valorDescontado;

    return [valorDescontado, precioFinal]
}

function handleInputs(e){
    const precio = inputPrecio.value;
    const descuento = inputDescuento.value;
    e.preventDefault();
    
    if(validacionFormulario(precio, descuento)){
        const resultado = calcularResultado(precio, descuento);
        descuentoFinal.innerHTML = `Descuento: <b>$${resultado[0]}</b>`;
        precioFinal.innerHTML = `Precio Final: <b>$${resultado[1]}</b>`;
    }
    else {
        alert("No se ha validado el form");
    }
}

function handleMobileFocus(){
    divRespuesta.classList.add("noDisplay");
    formContainer.classList.add("fullHeight");
}

function handleMobileBlur() {
    divRespuesta.classList.remove("noDisplay");
    formContainer.classList.remove("fullHeight");
}

// Eventos

form.addEventListener("submit", e => handleInputs(e));

inputPrecio.addEventListener("focus", handleMobileFocus);
inputDescuento.addEventListener("focus", handleMobileFocus);
inputPrecio.addEventListener("blur", handleMobileBlur);
inputDescuento.addEventListener("blur", handleMobileBlur);
