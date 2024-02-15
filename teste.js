var linhasTabela = document.querySelectorAll(".linhas");

for(var i = 0; i < linhasTabela.length; i++) {

    var quantidade = linhasTabela[i].querySelector(".info-qtde").textContent;
    var valoruni = linhasTabela[i].querySelector(".info-valor").textContent;

    var calc_total = quantidade * valoruni;

    linhasTabela[i].querySelector(".info-valortotal").textContent = "R$ " + calc_total;
}