import { Property } from "./property";
import { Features } from './features';
import { Superscription } from './superscription';
import { Photo } from './photo';

let features: Features = new Features(1, 'Casa', 40.00, 3);
let superscription: Superscription = new Superscription(1, 'Teixeira', 'PB', -12.9999, 23.9989, 'Vila feliz, nº 9');
let photos1: Photo[] = [
    new Photo(1, 1, 'https://fotos.vivadecora.com.br/decoracao-projeto-de-casa-casa-com-piscina-revistavd-173621-square_cover_xsmall.jpg'),
    new Photo(2, 1, 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/96/d5/87.jpg'),
    new Photo(3, 1, 'http://www.portaltudoaqui.com.br/wp-content/uploads/2013/08/piscina-transparente-nova-tendencia-capa.jpg'),
    new Photo(4, 1, 'https://odis.homeaway.com/odis/listing/a1874364-5d5d-4b61-a652-07f6c7d69b96.c10.jpg'),
    new Photo(5, 1, 'https://fotos.vivadecora.com.br/decoracao-projeto-de-casa-casa-com-piscina-revistavd-173621-square_cover_xsmall.jpg'),
    new Photo(6, 1, 'https://fotos.vivadecora.com.br/decoracao-projeto-de-casa-casa-com-piscina-revistavd-173621-square_cover_xsmall.jpg'),

];

let photos2: Photo[] = [
    new Photo(1, 2, 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/96/d5/87.jpg'),
];

let photos3: Photo[] = [
    new Photo(1, 3, 'http://www.portaltudoaqui.com.br/wp-content/uploads/2013/08/piscina-transparente-nova-tendencia-capa.jpg'),
];

let photos4: Photo[] = [
    new Photo(1, 4, 'https://odis.homeaway.com/odis/listing/a1874364-5d5d-4b61-a652-07f6c7d69b96.c10.jpg'),
];


export const propertyMock: Property[] = [
    new Property(1, 'Casa', 1, 'Descrição da casa Descrição casa Descrição da casa Descrição da casa, descrevendo a casinha', superscription, features, photos1),
    new Property(2, 'Casa', 2, 'Descrição da casa', superscription, features, photos3),
    new Property(3, 'Casa', 3, 'Descrição da casa', superscription, features, photos2),
    new Property(4, 'Casa', 4, 'Descrição da casa', superscription, features, photos3),
    new Property(5, 'Casa', 2, 'Descrição da casa', superscription, features, photos4),
    new Property(6, 'Casa', 3, 'Descrição da casa', superscription, features, photos1),
    new Property(7, 'Casa', 4, 'Descrição da casa', superscription, features, photos2)

];

