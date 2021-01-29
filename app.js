function escribirHtml(){

    limpiarHTML();

    const ingresoUsuario = document.getElementById('buscando').value;
    console.log(ingresoUsuario);

    const h2Primero = document.createElement('h2');
    h2Primero.textContent = "Resultado busqueda"

    const resultado = aplicaciones.find(item =>{
        return item.aplicacion === ingresoUsuario;
    })

    if(resultado.aplicacion === ingresoUsuario){
        const parrafo1 = document.createElement('p');
        parrafo1.textContent = `Aplicacion: ${resultado.aplicacion}`;
    
        console.log(parrafo1);
    
        const parrafo2 = document.createElement('p');
        parrafo2.textContent = "Reset y Desbloqueo : " + resultado.reset;
    
        const parrafo3 = document.createElement('p');
        parrafo3.textContent = "Administrado por : " + resultado.administrador;
    
        const elementoHtml = document.getElementById('resultado');
        elementoHtml.appendChild(h2Primero);
        elementoHtml.appendChild(parrafo1);
        elementoHtml.appendChild(parrafo2);
        elementoHtml.appendChild(parrafo3);
    }

}

escribirHtml();

//  autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
