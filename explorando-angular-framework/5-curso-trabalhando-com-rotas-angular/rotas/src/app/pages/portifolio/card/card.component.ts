import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // recuperando parametros da rota
  // http://localhost:4200/portfolio/{1}
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    // recuperando parametros dos filhos
    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )
    // recuperando parametros de consulta
    // http://localhost:4200/portfolio/1?{name=lucas&token=123}
    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    /*
    // redirecionando apos 5 segundos fora da pagina home
    setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000)
    */
  }

}
