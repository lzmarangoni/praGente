export const SplitText = (objeto : HTMLParagraphElement, id : string) => {
    let string = ""; //@ts-ignore
    let palavras = objeto.textContent.split(" "); //@ts-ignore
    for (let i = 0; i < palavras.length; i++) { palavras[i] = palavras[i].split(""); }
    console.log(palavras);
    for (let i = 0; i < palavras.length; i++) {
        string += "<div class='words-"+id+"' style='display: inline-block; position: relative;'>"
        for (let j = 0; j < palavras[i].length; j++) {
            string += "<div class='letter-"+id+"' style='display: inline-block; position: relative'>"+palavras[i][j]+ "</div>"
        }
        string += "<span>&nbsp;</span></div>"
    }
    objeto.innerHTML = string;
    return {
        chars: ".letter-"+id,
        words: ".words-"+id,
    }
}
