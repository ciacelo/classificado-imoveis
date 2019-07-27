import { Photo } from './photo';
import { Features } from './features';
import { Superscription } from './superscription';

export class Property {

    id: number;
    name: string;
    value: number;
    description: string;
    superscription: Superscription;
    features: Features;
    photos: Photo[];

    constructor(    id: number,  name: string, value: number, description:string, 
        superscription: Superscription, features: Features, photos: Photo[]){
            this.id = id;
            this.name = name;
            this.value = value;
            this.description = description;
            this.superscription = superscription;
            this.features = features;
            this.photos = photos;
        }


    setId(id: number): void{
        this.id = id;
    }
    getId(): number{
        return this.id;
    }

    setName(name: string): void{
        this.name = name;
    }
    getName(): string{
        return this.name;
    }

    setValue(value: number): void{
        this.value = value;
    }   
    getValue(): number{
        return this.value;
    }

    setDescription(description: string): void{
        this.description = description;
    }
    getDescription(): string{
        return this.description;
    }

    setSuperscription(superscription: Superscription): void{
        this.superscription = superscription;
    }
    getSuperscription(): Superscription{
        return this.superscription
    }

    setFeatures(features: Features): void{
        this.features = features;
    }
    getFeatures(): Features{
        return this.features;
    }

    setPhoto(photo: Photo[]): void{
        this.photos = photo;
    }
    getPhoto(): Photo[]{
        return this.photos;
    }
}
  