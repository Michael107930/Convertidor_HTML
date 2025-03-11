function convertir_a_Ascii() {
    let caracter = document.getElementById("charInput").value;
    if (caracter.length === 1) {
        let ascii = caracter.charCodeAt(0);
        document.getElementById("asciiOutput").innerText = "Código ASCII: " + ascii;
    } else {
        alert("Ingrese un solo carácter.");
    }
}
function borrarCaracter(){
    document.getElementById("charInput").value="";
    
}
function convertir_a_Binario() {
    let caracter = document.getElementById("charInput").value;
    if (caracter.length === 1) {
        let ascii = caracter.charCodeAt(0);
        let binario = "";
        for (let i = 7; i>=0; i--){
            if (2**i<=ascii){
                binario+=+"1";
                ascii-=2**i;
            } else{
                binario+="0";
            }
        }
        document.getElementById("binaryOutput").innerText = "Binario (8 bits): " + binario;
    } else {
        alert("Ingrese un solo carácter.");
    }
}

function convertir_Binario_a_Caracter() {
    let binario = document.getElementById("binarioCaracterEntrada").value;
    let caracter = String.fromCharCode(parseInt(binario, 2));
    document.getElementById("binarioCaracterSalida").innerText = "El caracter es: "+caracter;
}

function borrarBinario(){
    document.getElementById("binarioCaracterEntrada").value="";
    
}

