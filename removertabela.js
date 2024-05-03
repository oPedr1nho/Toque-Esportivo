//LINHAS DA TABELA AÇÃO
// var encomenda = document.querySelectorAll(".linhas");

// encomenda.forEach(function(linha){
//     linha.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });





var encomenda = document.querySelectorAll(".linhas");


tabela.addEventListener("dblclick", function(){
    event.target.parentNode.remove();    
});