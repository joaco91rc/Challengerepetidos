function repetidos(S, R) {
    let palabra = '';
    palabra = palabra + S[0];
    let contador = 1;
    if (S === "") {
        return alert("Palabra Inexistente")

    }
    else {
        if (R === 0) {
            return alert("La cantidad de repeticiones debe ser mayor a cero")
        } else {

            for (let i = 1; i < S.length; ++i) {

                if (S[i] === S[i - 1]) {
                    contador = contador + 1;
                } else {
                    contador = 1;
                }

                if (contador <= R) {
                    palabra = palabra + S[i];
                }
            }
            document.getElementById("resultado").innerHTML = '';
            document.getElementById("resultado").innerHTML = `<p>${palabra}</p>`;
        }
    }
}



document.getElementById("boton").addEventListener("click", () => {
    let S = document.getElementById("palabra").value;
    let R = document.getElementById("repeticiones").value;

    repetidos(S, R);
})


