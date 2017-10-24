import { Injectable } from '@angular/core';
import { Editor } from './../editor-reviews/editor.model';
import { Interview } from './interview.model';
/**
 * 
 * @author Humphrey Fonseca
 * @description classe de servico para intrevista
 * @export
 * @class InterviewsService
 */
@Injectable()
export class InterviewsService{

    private interviews : Interview[] = [
        new Interview(1,'What is music-nation?', new Date('2013-05-18'), new Editor(1, 'Zack')),
        new Interview(2,'Lorem ipsum dolor sit amet, consectetur adipiscing elit?', new Date('2014-06-28'), new Editor(2, 'Lauren')),
        new Interview(3,'Nullam id elit mi. Fusce porta mauris a orci tristique convallis?', new Date('2014-02-02'), new Editor(3, 'Josh')),
        new Interview(4,'Fusce eget tincidunt enim?', new Date('2013-05-23'), new Editor(4, 'Paul')),
        new Interview(5,'In eget pretium nibh, sed scelerisque massa?', new Date('2014-03-06'), new Editor(5, 'Tony'))

    ]

    getLastInterviews(){
        return this.interviews;
    }
}