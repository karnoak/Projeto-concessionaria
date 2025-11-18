import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Carrosel } from "../../components/carrosel/carrosel";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, RouterLinkActive, Carrosel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  imagens = [
    'lancer.png',
    'opala.png',
    'carro.png',
    'audir8.png'
  ];

  indexAtual = 0;

  proximo() {
    this.indexAtual = (this.indexAtual + 1) % this.imagens.length;
  }

  anterior() {
    this.indexAtual =
      (this.indexAtual - 1 + this.imagens.length) % this.imagens.length;
  }
}
