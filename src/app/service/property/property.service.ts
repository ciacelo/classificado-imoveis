import { Injectable } from '@angular/core';
import { Property } from './property';
import { Photo } from './photo';
import { propertyMock } from './propertyMock';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  properties: Property[];

  constructor() { 
    this.properties = propertyMock;
  }

  addProperty(property: Property): void{
    this.properties.push(property);
  }

  removeProperty(id: number): void{
    for(let i=0;i<this.properties.length;i++){
      if(this.properties[i].getId() === id){
        this.properties.splice(1, id);
      }
    }
  }

  getProperty(id: number): Property{
    for(let i=0;i<this.properties.length;i++){
      if(this.properties[i].getId() === id){
       return this.properties[id];
      }
    }
  }

  addPhoto(propertyId: number, photo: Photo): void{
    for(let i=0;i<this.properties.length;i++){
      if(this.properties[i].getId() === propertyId){
        let photos: Photo[] = this.properties[i].getPhoto();
        photos.push(photo);
        break;
      }
    }
  }

}
