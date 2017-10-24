import { Concert } from './concert.model';
import { Injectable } from '@angular/core';

/**
 * 
 * @author Humphrey Fonseca
 * @description Classe de servico para concerto
 * @export
 * @class ConcertsService
 */
@Injectable()
export class ConcertsService{

    private concerts : Concert[] = [
        new Concert(1,'Mark Knopfler', new Date('2013-05-08'),'Lodz, Atlas Arena'),
        new Concert(2,'Roger Waters The Wall', new Date('2013-08-20'),'Warszawa'),
        new Concert(3,'Sonisphere Festival', new Date('2013-10-12'),'Wroclaw'),
        new Concert(4,'Iron Maiden', new Date('2013-08-20'),'Warszawa')
    ]

    getLastConcerts(){
        return this.concerts;
    }

}