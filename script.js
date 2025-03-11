function convertir_a_Ascii() {
    let caracter = document.getElementById("caracterEntrada").value;
    if (caracter.length === 1) {
        let ascii = caracter.charCodeAt(0);
        document.getElementById("asciiSalida").innerText = "Código ASCII: " + ascii;
    } else {
        alert("Ingrese un solo carácter.");
    }
}
function borrarCaracter(){
    document.getElementById("caracterEntrada").value="";
    
}
function convertir_a_Binario() {
    let caracter = document.getElementById("caracterEntrada").value;
    if (caracter.length === 1) {
        let ascii = caracter.charCodeAt(0);
        let binario = "";
        for (let i = 7; i>=0; i--){
            if (2**i<=ascii){
                binario+="1";
                ascii-=2**i;
            } else{
                binario+="0";
            }
        }
        document.getElementById("binarioSalida").innerText = "Binario (8 bits): " + binario;
    } else {
        alert("Ingrese un solo carácter.");
    }
}

function convertir_Binario_a_Caracter() {
    let binario = document.getElementById("binarioCaracterEntrada").value;
    let suma = 0;
    let caracter="";
    if (binario.length==8){
        if (/^[01]+$/.test(binario)){
            for (let vc = 0 ; vc<binario.length;vc++){
                if (binario[7-vc]=="1"){
                    suma+=2**vc;
                }
            }
            caracter = String.fromCharCode(suma);  
            document.getElementById("binarioCaracterSalida").innerText = "El caracter es: "+caracter;
        } else {
            alert("Ingrese solo 1s y 0s.");
        }
    } else{
        alert("Ingrese un binario de 8 bits");
    }
    
}

function borrarBinario(){
    document.getElementById("binarioCaracterEntrada").value="";
    
}

