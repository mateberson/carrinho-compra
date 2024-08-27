import { Produto } from "./produto";

export class Carrinho {
  public produtos: Produto[] = [];
  public valorTotal: number = 0;
}
