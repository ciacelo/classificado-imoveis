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

  addPhoto(propertyId: number, photo: Photo): void{
    for(let i=0;i<this.properties.length;i++){
      if(this.properties[i].getId() === propertyId){
        let photos: Photo[] = this.properties[i].getPhoto();
        photos.push(photo);
        this.properties[i].setPhoto(photos);
        break;
      }
    }
  }

  getProperty(id: number): Property{
    for(let i=0;i<this.properties.length;i++){
      if(this.properties[i].getId() === id){
       return this.properties[i];
      }
    }
  }

  getProperties(){
    return this.properties;
  }

  removeProperty(id: number): void{
    for(let i=0;i<this.properties.length;i++){
      if(this.properties[i].getId() === id){
        this.properties.splice(1, id);
      }
    }
  }


}
