import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../service/classe.service';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
    selector: 'app-headers',
    templateUrl: './headers.component.html',
    styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

    constructor(
        public xpService: ExperienciaService,
        public classService: ClasseService,

    ) { }

    ngOnInit() {
    }

    getXP(){
        this.xpService.getXP()
    }

}
