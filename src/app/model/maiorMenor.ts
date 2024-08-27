import { Carrinho } from "./carrinho";
import { Produto } from "./produto";

export class MaiorEMenor {
  private _menor: Produto | undefined;
  private _maior: Produto | undefined;

  public encontra(carrinho: Carrinho) {
    carrinho.produtos.forEach(produto => {
      if (this._menor === undefined || produto.preco < this._menor.preco) {
        this._menor = produto;
      }
      // correção, remover o else
      if (this._maior === undefined || produto.preco > this._maior.preco) {
        this._maior = produto;
      }
    });
  }

  public getMenor(): Produto | undefined {
    return this._menor;
  }

  public getMaior(): Produto | undefined {
    return this._maior;
  }
}
