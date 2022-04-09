import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome1 = "";
  nome2 = "";
  url = "http://lucasreno.kinghost.net/love-calculator/";
  resultado = 0;
  mensagem = "";
  img = "";
  calculando = false;
  constructor(public http: HttpClient,
  ) {

  }
  async enviarDados() {
    let soma = 0;
    //this.imagem = false
    while (soma != 10) {
      this.resultado = Math.floor(Math.random() * 100 + 1);
      this.calculando = true;
      soma += 1;
      await this.delay(75);
    }
    this.calculando = false;
    
     
      this.http.get<any>(this.url + this.nome1 + "/" + this.nome2).subscribe(
        (resposta: any) => {
          this.resultado = resposta
          if (this.resultado < 20) { this.mensagem = "Desculpe."; this.img = '../../assets/willTriste.jpg'; }
          else if (this.resultado < 40) { this.mensagem = "meh..."; this.img = '../../assets/willChorando.jpg'; }
          else if (this.resultado < 60) { this.mensagem = "Tá ficando bom"; this.img = '../../assets/willtranquilo.jpg'; }
          else if (this.resultado < 80) { this.mensagem = "Tá òtimo"; this.img = '../../assets/willfeliz.jpg'; }
          else { this.mensagem = "Perfeito"; this.img = '../../assets/willcelebrando.jpg'; }

        }
      );
      }
      delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
      

    }

  }