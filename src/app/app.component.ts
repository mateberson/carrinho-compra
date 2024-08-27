import { Component, OnInit } from '@angular/core';
import { Carrinho } from './model/carrinho';
import { Produto } from './model/produto';
import { MaiorEMenor } from './model/maiorMenor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'carrinho-compra';

  ngOnInit(): void {
    const carrinho = new Carrinho();
    carrinho.adiciona(new Produto('Liquidificador', 250.00));
    carrinho.adiciona(new Produto('Geladeira', 4500.00)); //para segundo teste inverter a ordem
    carrinho.adiciona(new Produto('jogo de pratos', 70.00));

    const algoritmo = new MaiorEMenor();
    algoritmo.encontra(carrinho);

    console.log('O menor produto é: ', algoritmo.getMenor());
    console.log('O maior produto é: ', algoritmo.getMaior());
  }
}
