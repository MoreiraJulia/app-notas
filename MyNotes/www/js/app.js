function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value
    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + "</p>"
    document.getElementById("anotacao").value = ""
    alert("Anotação salva \ncom sucesso")
}
document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
})