export interface ProductsInterface {
  id: number;
  produto: string;
  preco: number;
  valorAnterior: number;
  valorComDesconto: number;
  imageUrl: string;
  descricao: string;
  tamanhos: string[];
  cores: string[];
}

const produtos: ProductsInterface[] = [
  {
    id: 1,
    produto: "Manga",
    preco: 109.9,
    valorAnterior: 219.8,
    valorComDesconto: 109.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_33_33_103_15_11_4_433_manga20longa20branca20feminina20109.jpg?v=1732732440",
    descricao: "Manga longa branca feminina, confortável e estilosa.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco", "Preto"],
  },
  {
    id: 2,
    produto: "Camiseta",
    preco: 89.9,
    valorAnterior: 179.8,
    valorComDesconto: 89.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_35_07_40_15_11_4_416_camiseta20branca20feminina2023.png?v=1732732527",
    descricao: "Camiseta branca feminina, básica e versátil.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco", "Azul"],
  },
  {
    id: 3,
    produto: "Regata",
    preco: 79.9,
    valorAnterior: 159.8,
    valorComDesconto: 79.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_25_02_764_15_11_8_878_regatapretafeminina2018.jpg?v=1732732132",
    descricao: "Regata preta feminina, ideal para o verão.",
    tamanhos: ["P", "M", "G"],
    cores: ["Preto"],
  },
  {
    id: 4,
    produto: "Camiseta",
    preco: 79.9,
    valorAnterior: 159.8,
    valorComDesconto: 79.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2024/04/03/15_28_21_88_15_4_3_360_retry.jpg?v=1712168901",
    descricao: "Camiseta masculina preta, confortável e básica.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Cinza"],
  },
  {
    id: 5,
    produto: "Moletom",
    preco: 129.9,
    valorAnterior: 259.8,
    valorComDesconto: 129.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_9_961_22_17_44_56_moletommasculinopreto1111f31df18c32ce901c771674654433814710241024.png?v=1737552349",
    descricao: "Moletom masculino preto, perfeito para o inverno.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
  },
  {
    id: 6,
    produto: "Camiseta",
    preco: 99.9,
    valorAnterior: 199.8,
    valorComDesconto: 99.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_6_623_FotodoprodutoMANGALONGABRANCACOMMANGAS_yythk.png?v=1737552349",
    descricao: "Camiseta manga longa branca, elegante e confortável.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco", "Preto"],
  },
  {
    id: 7,
    produto: "Ecobag",
    preco: 39.9,
    valorAnterior: 79.8,
    valorComDesconto: 39.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_7_718_FotodoprodutoECOBAGPALHARANOSSOET.png?v=1737552349",
    descricao: "Ecobag de palha, ideal para o dia a dia.",
    tamanhos: ["Único"],
    cores: ["Bege", "Marrom"],
  },
  {
    id: 8,
    produto: "Caneca",
    preco: 29.9,
    valorAnterior: 59.8,
    valorComDesconto: 29.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_2_259_22_17_32_624_frentecaneca17608e0dd03ff3375411671125424090610241024.png?v=1737552349",
    descricao: "Caneca estampada, ideal para café ou chá.",
    tamanhos: ["Único"],
    cores: ["Branco", "Preto"],
  },
  {
    id: 9,
    produto: "Camisa",
    preco: 69.9,
    valorAnterior: 139.8,
    valorComDesconto: 69.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2024/12/05/11_10_23_288_11_12_6_696_1.jpg?v=1733407828",
    descricao: "Camisa casual masculina, perfeita para um look do dia.",
    tamanhos: ["P", "M", "G"],
    cores: ["Azul", "Branco"],
  },
  {
    id: 10,
    produto: "Murrinho",
    preco: 89.9,
    valorAnterior: 179.8,
    valorComDesconto: 89.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/lolja/2023/09/05/12_00_40_464_12_9_1_128_murrinho.png?v=1693926040",
    descricao: "Chaveiro Murrinho, um acessório divertido e estiloso.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Cinza", "Preto"],
  },
  {
    id: 11,
    produto: "Camiseta",
    preco: 79.9,
    valorAnterior: 159.8,
    valorComDesconto: 79.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2023/02/22/22_17_44_7_camiseta-vermelha-masculina-141-a56e83279d057fb9a416746540553810-1024-1024.jpg?v=1677115064",
    descricao: "Camiseta vermelha masculina, confortável para o dia a dia.",
    tamanhos: ["P", "M", "G"],
    cores: ["Vermelho", "Branco"],
  },
  {
    id: 12,
    produto: "Camiseta",
    preco: 69.9,
    valorAnterior: 139.8,
    valorComDesconto: 69.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2023/05/05/10_5_8_845_CAMISETA20BRANCA20MASCULINA2057.jpg?v=1683293122",
    descricao: "Camiseta branca masculina, básica e confortável.",
    tamanhos: ["P", "M", "G"],
    cores: ["Branco"],
  },
  {
    id: 13,
    produto: "Camiseta",
    preco: 79.9,
    valorAnterior: 159.8,
    valorComDesconto: 79.9 / 2,
    imageUrl:
      "https://cdn.vnda.com.br/780x/lolja/2023/09/14/14_07_16_548_14_9_4_471_camiseta20preta20masculina2033.jpg?v=1694711236",
    descricao: "Camiseta preta masculina, ideal para o dia a dia.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto"],
  },
];

export default produtos;
