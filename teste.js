var linhasTabela = document.querySelectorAll(".linhas");

for(var i = 0; i < linhasTabela.length; i++) {

    var quantidade = linhasTabela[i].querySelector(".info-qtde").textContent;
    var valoruni = linhasTabela[i].querySelector(".info-valor").textContent;

    //Valida a quantidade
    if(quantidade < 1 || isNaN(quantidade)){
        //Quantidade NOK --- Reportar ao usuário
        linhasTabela[i].querySelector(".info-qtde").textContent = "QUANTIDADE INVÁLIDA!";
        linhasTabela[i].querySelector(".info-qtde").style.color = "red";
    }else{
        //Quantidade OK --- Prosseguir
        if(valoruni <=0 || isNaN(valoruni)){
            //Valor NOK --- Reportar ao usuário
            linhasTabela[i].querySelector(".info-valortotal").textContent = "VALOR INVÁLIDO!";
            linhasTabela[i].style.backgroundColor = "red";
        }else{
            //Valor OK --- Prosseguir
            linhasTabela[i].querySelector(".info-valortotal").textContent = "R$ " + calcularTotal(quantidade,valoruni);
        }
    }
}

//Funcao para Calcular Valor Total da Encomenda

function calcularTotal(quantidade,valoruni){
    var total = 0;
    total = quantidade * valoruni;;

    return total;
}


document.getElementById("form-encomenda").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário por padrão

        // Obtém os valores dos campos
        var nome = document.getElementById("nome").value;
        var produto = document.getElementById("produto").value;
        var modelo = document.getElementById("modelo").value;
        var quantidade = document.getElementById("quantidade").value;
        var tamanho = document.getElementById("tamanho").value;
        var valor = document.getElementById("valor").value;
    
        // Adiciona uma nova linha na tabela com os valores inseridos
        var novaLinha = "<tr class='linhas'><td class='info-nome'>" + nome + "</td><td class='info-produto'>" + produto + "</td><td class='info-modelo'>" + modelo + "</td><td class='info-qtde'>" + quantidade + "</td><td class='info-tamanho'>" + tamanho + "</td><td class='info-valor'>" + valor + "</td><td class='info-valortotal'>R$ " + calcularTotal(quantidade, valor) + "</td></tr>";
        document.getElementById("tabela").innerHTML += novaLinha;
    
        // Atualiza os totais
        atualizarTotais();
    });
    
    function atualizarTotais() {
        var linhasTabela = document.querySelectorAll(".linhas");
    
        for (var i = 0; i < linhasTabela.length; i++) {
            var quantidade = linhasTabela[i].querySelector(".info-qtde").textContent;
            var valoruni = linhasTabela[i].querySelector(".info-valor").textContent;
    
            //Valida a quantidade e calcula o total
            if (quantidade < 1 || isNaN(quantidade) || valoruni <= 0 || isNaN(valoruni)) {
                linhasTabela[i].querySelector(".info-valortotal").textContent = "VALOR INVÁLIDO!";
                linhasTabela[i].style.backgroundColor = "red";
            } else {
                linhasTabela[i].querySelector(".info-valortotal").textContent = "R$ " + calcularTotal(quantidade, valoruni);
            }
        }
    }

