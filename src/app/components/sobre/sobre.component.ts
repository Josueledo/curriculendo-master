import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {


  integrantes = [
    { nome: 'Geovana', imagem: 'background-icons/icon.png' },
    { nome: 'Luiza', imagem: 'background-icons/icon.png' },
    { nome: 'Maria', imagem: 'background-icons/icon.png' },
    { nome: 'Nicole', imagem: 'background-icons/icon.png' }
  ];

}
