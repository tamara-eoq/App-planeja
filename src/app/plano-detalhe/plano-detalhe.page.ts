import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plano-detalhe',
  templateUrl: './plano-detalhe.page.html',
  styleUrls: ['./plano-detalhe.page.scss'],
})
export class PlanoDetalhePage implements OnInit {

  nomeDoPlano;
  custoMensal;
  faturamentoMensal;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  mostrarDetalhes(){
    const nomeDoPlano = this.activatedRoute.snapshot.params.id
    const planoString = sessionStorage.getItem(nomeDoPlano)
    const planoReal = JSON.parse(planoString)

    this.nomeDoPlano = planoReal.nomeDoPlano
    this.custoMensal = planoReal.custoMensal
    this.faturamentoMensal = planoReal.faturamentoMensal
  }

  ionViewDidEnter(){
    this.mostrarDetalhes()
  }

}
