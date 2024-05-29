import Icon from '../../assets/icon.png';
import Logo from '../../assets/logo.jpeg';
import camisa1 from '../../assets/produtos/camisa1.jpeg'
import camisa2 from '../../assets/produtos/camisa2.jpg'
import camisa3 from '../../assets/produtos/camisa3.png'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Kit Camisas Campeão dos últimos campeonatos",
        logo: Logo,
        detalhes: "Um kit com as últimas camisas do verdão!",
        preco: "R$ 1000,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit Palmeiras",
        lista: [
          {
            nome: "1x Camisa Palmeiras 22 Branca",
            imagem: camisa1,
          },
          {
            nome: "1x Camisa Palmeiras 23 Manga Longa Verde",
            imagem: camisa2,
          },
          {
            nome: "1x Camisa Palmeiras 21 Verde",
            imagem: camisa3,
          },
        ]
    }
}

export default produto;