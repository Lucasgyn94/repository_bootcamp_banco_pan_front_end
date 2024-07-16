import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy

} from '@angular/core';

@Component({
  selector: 'app-exemplo-do-check',
  templateUrl: './exemplo-do-check.component.html',
  styleUrls: ['./exemplo-do-check.component.css']
})
export class ExemploDoCheckComponent implements
                                      OnInit,
                                      DoCheck,
                                      AfterContentChecked,
                                      AfterContentInit,
                                      AfterViewChecked,
                                      AfterViewInit,
                                      OnDestroy
  {

  quantidade: number = 0;

  constructor() { }

  adicionar() {
    this.quantidade = this.quantidade + 1;
  }

  decrementar() {
    this.quantidade = this.quantidade - 1;
  }

  // checked -> content -> view
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // após alguma alteração, verifica o conteúdo.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // ocoore quando o conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // ocorre depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log(`Good Bye`);
  }
}
