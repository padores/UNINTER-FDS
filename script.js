console.log("Easter egg");

document.getElementById("botao").addEventListener("click", function () {
    if (!document.getElementById("mensagem")) { 
        const mensagem = document.createElement("p");
        mensagem.id = "mensagem"; 
        mensagem.textContent = "Oi!";
        document.getElementById("container").appendChild(mensagem);
    }
});


