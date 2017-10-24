import { Editor } from './../editor-reviews/editor.model';
import { LastBand } from './last-band.model';
import { Injectable } from '@angular/core';
/**
 * 
 * @author Humphrey fonseca
 * @description Classe de servico para ultimas bandas adicionadas
 * @export
 * @class LastBandService
 */
@Injectable()
export class LastBandService {

    private lastBands :LastBand[]=[
        new LastBand(1,'Sonata Arctica', 'assets/img/persons/person-5.png', new Editor(1, 'JOHN WILSON')),
        new LastBand(1,'Nightwish', 'assets/img/persons/person-6.png', new Editor(1, 'KATE HOUSTON')),
        new LastBand(1,'Blind Guardian', 'assets/img/persons/person-7.png', new Editor(1, 'TOM BUCKLEY')),
        new LastBand(1,'Kamelot', 'assets/img/persons/person-9.png', new Editor(1, 'EDDIE NORTON'))

    ]

    getLastBandsAdd(){
        return this.lastBands;
    }



}