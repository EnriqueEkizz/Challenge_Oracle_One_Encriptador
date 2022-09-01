const input_encriptar = document.getElementById('txtEncriptar');
const input_desencriptar = document.getElementById('txtDesencriptar');

function do__encriptar() {
    // Encriptar
    input_desencriptar.value = encripta__ahora(input_encriptar.value);

    // Limpiar input encriptar
    input_encriptar.value = '';
}
function do__desencriptar() {
    // Desencriptar
    input_encriptar.value = desencriptar__ahora(input_desencriptar.value);

    // Limpiar input desencriptar
    input_desencriptar.value = '';
}

function encripta__ahora(xTexto) {
    let arrCondiciones = [
        ['a', '[a]','ai'],
        ['e', '[e]', 'enter'],
        ['i', '[i]', 'imes'],
        ['o', '[o]', 'ober'],
        ['u', '[u]', 'ufat']
    ];


    // Obtener texto a encriptar
    let texto_original = xTexto;

    // transformar a minuscula
    texto_original = texto_original.toLowerCase();

    // Prepara texto a encriptar agregando corchetes a cada vocal
    let texto_encriptado = texto_original;
    for (let _i = 0; _i < arrCondiciones.length; _i++) {
        if (texto_encriptado.includes(arrCondiciones[_i][0])) {
            texto_encriptado = texto_encriptado.replaceAll(arrCondiciones[_i][0],arrCondiciones[_i][1]);
        }
        
    }

    // Encriptar letras con corchetes
    for (let _i = 0; _i < arrCondiciones.length; _i++) {
        if (texto_encriptado.includes(arrCondiciones[_i][1])) {
            texto_encriptado = texto_encriptado.replaceAll(arrCondiciones[_i][1],arrCondiciones[_i][2]);
        }
        
    }

    return texto_encriptado;
}

function desencriptar__ahora(xTexto) {
    let arrCondiciones = [
        ['a','ai'],
        ['e', 'enter'],
        ['i', 'imes'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    // Prepara texto a encriptar agregando corchetes a cada vocal
    let texto_desencriptado = xTexto;
    for (let _i = 0; _i < arrCondiciones.length; _i++) {
        if (texto_desencriptado.includes(arrCondiciones[_i][1])) {
            texto_desencriptado = texto_desencriptado.replaceAll(arrCondiciones[_i][1],arrCondiciones[_i][0]);
        }
        
    }

    return texto_desencriptado;
}