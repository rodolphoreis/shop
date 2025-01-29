export interface ProductsInterface {
  id: number;
  produto: string;
  preco: number;
  imageUrl: string;
}

const arrayImage = [
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_33_33_103_15_11_4_433_manga20longa20branca20feminina20109.jpg?v=1732732440",
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_35_07_40_15_11_4_416_camiseta20branca20feminina2023.png?v=1732732527",
  "https://cdn.vnda.com.br/780x/lolja/2024/11/27/15_25_02_764_15_11_8_878_regatapretafeminina2018.jpg?v=1732732132",
  "https://cdn.vnda.com.br/780x/lolja/2024/04/03/15_28_21_88_15_4_3_360_retry.jpg?v=1712168901",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_9_961_22_17_44_56_moletommasculinopreto1111f31df18c32ce901c771674654433814710241024.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_6_623_FotodoprodutoMANGALONGABRANCACOMMANGAS_yythk.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/11/22/14_11_8_886_WhatsAppImage20231122at142943.jpeg?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_7_718_FotodoprodutoECOBAGPALHARANOSSOET.png?v=1737552349",
  "https://cdn.vnda.com.br/767x/lolja/2023/06/06/15_6_2_259_22_17_32_624_frentecaneca17608e0dd03ff3375411671125424090610241024.png?v=1737552349",
  "https://cdn.vnda.com.br/780x/lolja/2024/12/05/11_10_23_288_11_12_6_696_1.jpg?v=1733407828",
  "https://cdn.vnda.com.br/lolja/2023/09/05/12_00_40_464_12_9_1_128_murrinho.png?v=1693926040",
  "https://cdn.vnda.com.br/767x/lolja/2023/11/22/14_11_1_164_WhatsAppImage20231122at143328.jpeg?v=1737552349",
  "https://cdn.vnda.com.br/780x/lolja/2023/02/22/22_17_44_7_camiseta-vermelha-masculina-141-a56e83279d057fb9a416746540553810-1024-1024.jpg?v=1677115064",
  "https://cdn.vnda.com.br/780x/lolja/2023/05/05/10_5_8_845_CAMISETA20BRANCA20MASCULINA2057.jpg?v=1683293122",
  "https://cdn.vnda.com.br/780x/lolja/2023/09/14/14_07_16_548_14_9_4_471_camiseta20preta20masculina2033.jpg?v=1694711236",
];

const produtos: ProductsInterface[] = [
  {
    id: 1,
    produto: "Moletom",
    preco: 109.9,
    imageUrl: arrayImage[0],
  },
  {
    id: 2,
    produto: "Camiseta",
    preco: 99.9,
    imageUrl: arrayImage[1],
  },
  {
    id: 3,
    produto: "Regata",
    preco: 89.9,
    imageUrl: arrayImage[2],
  },
  { id: 4, produto: "Retry", preco: 79.9, imageUrl: arrayImage[3] },
  {
    id: 5,
    produto: "Moletom",
    preco: 199.9,
    imageUrl: arrayImage[4],
  },
  {
    id: 6,
    produto: "Manga",
    preco: 119.9,
    imageUrl: arrayImage[5],
  },
  { id: 7, produto: "Almofada", preco: 59.9, imageUrl: arrayImage[6] },
  { id: 8, produto: "Ecobag", preco: 49.9, imageUrl: arrayImage[7] },
  { id: 9, produto: "Caneca", preco: 39.9, imageUrl: arrayImage[8] },
  {
    id: 10,
    produto: "Boné",
    preco: 129.9,
    imageUrl: arrayImage[9],
  },
  { id: 11, produto: "Chaveiro", preco: 69.9, imageUrl: arrayImage[10] },
  {
    id: 12,
    produto: "Camiseta",
    preco: 59.9,
    imageUrl: arrayImage[11],
  },
  {
    id: 13,
    produto: "Camiseta",
    preco: 99.9,
    imageUrl: arrayImage[12],
  },
  {
    id: 14,
    produto: "Camiseta",
    preco: 99.9,
    imageUrl: arrayImage[13],
  },
  {
    id: 15,
    produto: "Camiseta",
    preco: 99.9,
    imageUrl: arrayImage[14],
  },
];

export default produtos;
