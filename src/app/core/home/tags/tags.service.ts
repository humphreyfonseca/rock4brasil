import { Injectable } from '@angular/core';
import { Tag } from './tag.model';
/**
 * 
 * 
 * @author Humphrey Fonseca
 * @description Classe de servico para Tags
 * @export
 * @class TagsService
 */
@Injectable()
export class TagsService {

    private tags : Tag[] = [
        new Tag(1, 'Rock', 1),
        new Tag(1, 'Heavy meta', 4),
        new Tag(1, 'Jazz', 1),
        new Tag(1, 'Progressive', 3),
        new Tag(1, 'Grunge', 1),
        new Tag(1, 'Electronic', 6),
        new Tag(1, 'Alternative', 2),
        new Tag(1, 'Trip hop', 7),
        new Tag(1, 'Post rock', 4),
        new Tag(1, 'Avantgarde', 6),
        new Tag(1, 'Space rock', 7),
        new Tag(1, 'Fusion', 4),
        new Tag(1, 'Funk', 5),
        new Tag(1, 'Power metal', 5),
        new Tag(1, 'Rave', 3),
        new Tag(1, 'Doom metal', 8),
        new Tag(1, 'Brit pop', 5),
        new Tag(1, 'Math metal', 7),
        new Tag(1, 'Hardcore', 5),
        new Tag(1, 'Punk', 6),
        new Tag(1, 'Blues', 4),
        new Tag(1, 'Symphony metal', 7),
        new Tag(1, 'Noise', 6)

    ]

    getHighRatingTags(){
        return this.tags;
    }
}