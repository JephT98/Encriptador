function detectar(frase){
    frase = Array.from(frase).map(x => x.replace(/[^a-z0-9' ']/,'')).join('')
    return frase
}
function encriptar() {
    if (texto.value== ""){
        return 
    }
    let msg = document.getElementById("texto").value;
    const e = "enter";
    const i = "imes";
    const a = "ai";
    const o = "ober";
    const u = "ufat";
    msg = Array.from(msg).map(x => x.replace("e", e)).join('');
    msg = Array.from(msg).map(x => x.replace("i", i)).join('');
    msg = Array.from(msg).map(x => x.replace("a", a)).join('');
    msg = Array.from(msg).map(x => x.replace("o", o)).join('');
    msg = Array.from(msg).map(x => x.replace("u", u)).join('');
    mostrar(msg);
}
function desencriptar(){
    if (texto.value== ""){
        return 
    }
    let msg = document.getElementById("texto").value;
    const e = "enter";
    const i = "imes";
    const a = "ai";
    const o = "ober";
    const u = "ufat";
    msg = msg.replace(new RegExp(u, 'g'), "u");
    msg = msg.replace(new RegExp(o, 'g'), "o");
    msg = msg.replace(new RegExp(a, 'g'), "a");
    msg = msg.replace(new RegExp(i, 'g'), "i");
    msg = msg.replace(new RegExp(e, 'g'), "e");
    mostrar(msg);
}
function mostrar(msg){
    const slider = document.querySelector(".mostrar-resultado");
    slider.scrollTop = 1000;
    document.getElementById("resultado").innerHTML= msg;
    
}
function copiar() {
    if (navigator.clipboard) {
        var content = document.getElementById('resultado').innerHTML;
        navigator.clipboard.writeText(content);
    } else {
        console.log("Clipboard API not supported");
    }
}