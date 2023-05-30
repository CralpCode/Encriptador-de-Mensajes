const areamensaje = document.getElementById('idmensaje');
const textoexc = document.getElementById('texto-enc');
const btncopiar = document.getElementById('idcopiar');
var valores = ['a','1','e','2','i','3','o','4','u','5'];
var valorcopia = "";
const vocales = "aeiou";


const Cambiador = (valor) => {
    let res;
    for (const letra of valor) {
        if (vocales.includes(letra)) {
           for(var i = 0 ; i <= valores.length; i++){
                if (valores[i] == letra) {
                    res = valor.replace(letra, valores[i+1] );
                    valor = res;
                    break;
                }
            }
        }
    }

    let invertir = valor.split("").reverse().join("");
    valorcopia = invertir;
    return invertir;
}

const Descambiador = (valor) => {
    let res;
    let revertir = valor.split("").reverse().join("");
    valor = revertir;
    for (const letra of valor) {
        const vocales = "12345";
        if (vocales.includes(letra)) {

           for(var i = 0 ; i <= valores.length; i++){
                console.log('letra : ' + letra + ' valor:  ' + valores[i-1] + ' tamano de array ' + valores.length)
                if (valores[i] == letra) {
                    res = valor.replace(letra, valores[i-1] );
                    valor = res;
                    valorcopia = valor;
                    console.log(valor)
                    break;
                }
            }
            
            console.log('Valor de vocales: ' + res + ' valor de la vocal ' + letra );
        }
    }
    return valor;
}

const Encriptador = () =>{
    let valor = areamensaje.value;
    if (valor == "") {
        return
    }
    textoexc.innerText = Cambiador(valor);
    btncopiar.style.display = "block";
    return;
}

const Desencriptador = () =>{
    let valor = areamensaje.value;
    if (valor == "") {
        return
    }
    textoexc.innerText = Descambiador(valor);
    btncopiar.style.display = "block";
    return;
}


const Copiar = () =>{
    const textToCopy = valorcopia;

    const tempElement = document.createElement("textarea");
    tempElement.value = textToCopy;
    tempElement.id ="textocopia";
    
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    return;
}