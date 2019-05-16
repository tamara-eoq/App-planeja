import { Component } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  planejamentos = []

  listar() {
    this.planejamentos = []
    const tamanhoDoBanco = sessionStorage.length
    for (let index = 0; index < sessionStorage.length; index++) {
      const chave = sessionStorage.key(index)
      if (chave !== 'ionic-persist-config') {
        const planejamento = sessionStorage.getItem(chave)
        this.planejamentos.push(JSON.parse(planejamento))
      }

    }
  }
  Excluir(nomeDoPlano){
    sessionStorage.removeItem(nomeDoPlano)
    this.listar()
  }
  ionViewDidEnter() {
    this.listar()
  }

}
