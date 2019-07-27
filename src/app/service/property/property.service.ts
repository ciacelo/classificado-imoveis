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

}
