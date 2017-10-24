import { Band } from './band.model';
import { LastAlbum } from './last-album.model';
import { Injectable } from '@angular/core';
/**
 * 
 * @author Humphrey Fonseca
 * @description Classe com os servico para buscar ultimos albuns
 * @export
 * @class LastAlbumsService
 */
@Injectable()
export class LastAlbumsService{

    private lastAlbums : LastAlbum[] = [        
        new LastAlbum(1,'Celebration Day', 'assets/img/covers/celebration-day-S.jpg', new Band(1,'Led Zeppelin')),
        new LastAlbum(2,'St. Anger', 'assets/img/covers/st-anger-S.jpg', new Band(2,'Metallica ')),
        new LastAlbum(3,'So', 'assets/img/covers/so-S.jpg', new Band(3,'Peter Gabriel')),
        new LastAlbum(4,'Dark Side Of The Moon', 'assets/img/covers/dark-side-of-the-moon-S.jpg', new Band(4,'Pink Floyd')),
        new LastAlbum(5,'The Fat Of The Land', 'assets/img/covers/fat-of-the-land-S.jpg', new Band(5,'Prodigy'))

    ]

    getLastAlbums(){
        return this.lastAlbums;
    }
}