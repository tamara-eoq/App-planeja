import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alert:AlertController, private router:Router){}


  planejamentos = []

  listar() {
    this.planejamentos = []
    const tamanhoDoBanco = sessionStorage.length
    for (let index = 0; index < tamanhoDoBanco; index++) {
      const chave = sessionStorage.key(index)
      if(chave !== 'ionic-persist-config') {
        const planejamento = sessionStorage.getItem(chave)
        this.planejamentos.push(JSON.parse(planejamento))
      }
    }
  }

  async exibirAlertaDeExclusao (nomeDoPlano) {
    const alertTemp = await this.alert.create({
      header: 'Exclusão de Plano',
      subHeader: 'Deseja realmente excluir plano ' + nomeDoPlano + '?',
      message: '',
      buttons: [{
        text: 'Cancelar',
        handler: function(){
          console.log("Clicou no cancelar")
        }
      },{
        text: 'Excluir',
        handler: () => {
          sessionStorage.removeItem(nomeDoPlano)
          this.listar()
        }
      }]
    })

    await alertTemp.present()
  }

  excluir(nomeDoPlano) {

    this.exibirAlertaDeExclusao(nomeDoPlano)
    
    //sessionStorage.removeItem(nomeDoPlano)
    //this.listar()
  }

  irParaDetalhes(nomeDoPlano){
    this.router.navigate(['/plano-detalhe', nomeDoPlano])
  }

  editar(nomeDoPlano){
    this.router.navigate(['/editar-plano', nomeDoPlano])
  }


  ionViewDidEnter(){
    this.listar()
  }

}
