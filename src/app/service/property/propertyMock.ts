import { Property } from "./property";
import { Features } from './features';
import { Superscription } from './superscription';
import { Photo } from './photo';

let features: Features = new Features(1, 'Casa', 40.00, 3);
let superscription: Superscription = new Superscription(1, 'Teixeira', 'PB', -12.9999, 23.9989, 'Vila feliz, nº 9');
let photos: Photo[] = [
    new Photo(1, 1, 'https://fotos.vivadecora.com.br/decoracao-projeto-de-casa-casa-com-piscina-revistavd-173621-square_cover_xsmall.jpg')
];

export const propertyMock: Property[] = [
    new Property(1, 'Casa', 1, 'Descrição da casa', superscription, features, photos),
    new Property(2, 'Casa', 1, 'Descrição da casa', superscription, features, photos),
    new Property(3, 'Casa', 1, 'Descrição da casa', superscription, features, photos),
    new Property(4, 'Casa', 1, 'Descrição da casa', superscription, features, photos),
    new Property(5, 'Casa', 1, 'Descrição da casa', superscription, features, photos),
    new Property(6, 'Casa', 1, 'Descrição da casa', superscription, features, photos),
    new Property(7, 'Casa', 1, 'Descrição da casa', superscription, features, photos)

];

