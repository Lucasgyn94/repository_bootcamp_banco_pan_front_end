import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {


  @Input() nome: string = '';
  
  constructor() { }

  // metodo onInit e disparado assim que o componente nasce
  ngOnInit(): void {
    this.nome = this.nome + "x";
    console.log(`OnInit ${this.nome}`);
  }

  // é disparado sempre que ocorre alguma mudança em nosso componente
  ngOnChanges(): void {
    console.log('OnChanges ${this.nome}}');
  }


}
