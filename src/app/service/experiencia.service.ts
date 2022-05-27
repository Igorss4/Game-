import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

    numeroXP: number = 0
    valorXpMax: number = 100
    valorXP: number = 0
    Lv: number = 1
    questXP: number = 10

  constructor() { }

    getXP(){
        this.lvUp()
        this.numeroXP += this.questXP/this.Lv
    }
    lvUp(){
        if(this.numeroXP >= this.valorXpMax){
            this.numeroXP = 0
            this.Lv += 1
            alert("Parabens, voce subiu de nivel")
        }
    }

}
