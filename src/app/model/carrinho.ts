import { Produto } from "./produto";

export class Carrinho {
  public produtos: Produto[] = [];
  public valorTotal: number = 0;

  public adiciona(produto: Produto): void {
    this.produtos.push(produto);
    this.valorTotal += produto.preco;
  }
}
