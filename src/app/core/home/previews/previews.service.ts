import { Preview } from './preview.model';
import { Injectable } from '@angular/core';
@Injectable()
export class PreviewService{

    private preview: Preview[] = [
        new Preview(1, 'Peter Gabriel - So', 4, 'assets/img/covers/so-L.jpg', new Date('12-10')), 
        new Preview(2, 'Steven Wilson - Raven That Refused To Sing', 5, 'assets/img/covers/raven-L.jpg', new Date('11-15'))
        
    ]

    getLastPreviews(){
        return this.preview;
    }
}