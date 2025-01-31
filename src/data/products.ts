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

const arrayImage = [
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_33_33_103_15_11_4_433_manga20longa20branca20feminina20109.jpg?v=1732732440",
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_35_07_40_15_11_4_416_camiseta20branca20feminina2023.png?v=1732732527",
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_25_02_764_15_11_8_878_regatapretafeminina2018.jpg?v=1732732132",
  "https://cdn.vnda.com.br/780x/lolja/2024/04/03/15_28_21_88_15_4_3_360_retry.jpg?v=1712168901",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_9_961_22_17_44_56_moletommasculinopreto1111f31df18c32ce901c771674654433814710241024.png?v=1737552349",
];

const produtos: ProductsInterface[] = [
  {
    id: 1,
    produto: "Moletom",
    preco: 109.9,
    valorAnterior: 219.8,
    valorComDesconto: 109.9 / 2,
    imageUrl: arrayImage[0],
    descricao: "Moletom confortável e estiloso, ideal para dias frios.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Cinza", "Azul"],
  },
  {
    id: 2,
    produto: "Camiseta",
    preco: 99.9,
    valorAnterior: 199.8,
    valorComDesconto: 99.9 / 2,
    imageUrl: arrayImage[1],
    descricao: "Camiseta básica branca, perfeita para qualquer ocasião.",
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Branco", "Preto", "Vermelho"],
  },
  {
    id: 3,
    produto: "Regata",
    preco: 89.9,
    valorAnterior: 179.8,
    valorComDesconto: 89.9 / 2,
    imageUrl: arrayImage[2],
    descricao: "Regata preta feminina, leve e confortável para dias quentes.",
    tamanhos: ["P", "M", "G"],
    cores: ["Preto", "Branco"],
  },
  {
    id: 4,
    produto: "Retry",
    preco: 79.9,
    valorAnterior: 159.8,
    valorComDesconto: 79.9 / 2,
    imageUrl: arrayImage[3],
    descricao: "Produto exclusivo da coleção Retry, com design inovador.",
    tamanhos: ["Único"],
    cores: ["Azul", "Verde"],
  },
  {
    id: 5,
    produto: "Moletom",
    preco: 199.9,
    valorAnterior: 399.8,
    valorComDesconto: 199.9 / 2,
    imageUrl: arrayImage[4],
    descricao: "Moletom preto masculino, ideal para dias frios.",
    tamanhos: ["M", "G", "GG"],
    cores: ["Preto", "Cinza"],
  },
];

export default produtos;
