import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../service/classe.service';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

    constructor(
        public classService: ClasseService,

    ) { }

    ngOnInit() {
    }

    classeArqueira() {
        this.classService.tipoClass = "Arqueira"
    }
    classeShaman() {
        this.classService.tipoClass = "Shaman"
    }
    classeLancer() {
        this.classService.tipoClass = "Lanceira"
    }

}
