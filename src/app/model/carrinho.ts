import { Produto } from "./produto";

export class Carrinho {
  private _produtos: Produto[] = [];
  private _valorTotal: number = 0;

  public adiciona(produto: Produto): void {
    this._produtos.push(produto);
    this._valorTotal += produto.preco;
  }

  public get produtos(): Produto[] {
    return this._produtos;
  }

  public get valorTotal(): number {
    return this._valorTotal;
  }
}
