import { Carrinho } from "./carrinho";
import { MaiorEMenor } from "./maiorMenor";
import { Produto } from "./produto";

describe('TestaMaiorMenor', () => {
  it('deve entender números em ordem não sequencial', () => {
    const algoritmo = new MaiorEMenor();
    const carrinho = new Carrinho();
    const liquidificador = new Produto('Liquidificador', 250.00);
    const geladeira = new Produto('Geladeira', 4500.00);
    const jogoDePratos = new Produto('jogo de pratos', 70.00);
    carrinho.adiciona(geladeira);
    carrinho.adiciona(liquidificador);
    carrinho.adiciona(jogoDePratos);

    algoritmo.encontra(carrinho);

    expect(algoritmo.getMenor()).toEqual(jogoDePratos);
    expect(algoritmo.getMaior()).toEqual(geladeira);
  });

  it('deve entender quando receber somente um produto', () => {
    const algoritmo = new MaiorEMenor();
    const carrinho = new Carrinho();
    const liquidificador = new Produto('Liquidificador', 250.00);
    carrinho.adiciona(liquidificador);

    algoritmo.encontra(carrinho);

    expect(algoritmo.getMenor()).toEqual(liquidificador);
    expect(algoritmo.getMaior()).toEqual(liquidificador);
  });
});
