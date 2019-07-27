import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Inject } from '@angular/core';
import { PropertyService } from 'src/app/service/property/property.service';
import { isNumber } from 'util';
import { Property } from 'src/app/service/property/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})

export class PropertyDetailsComponent implements OnInit {

  id: number;
  property: Property;

  constructor(private route: ActivatedRoute, @Inject('PropertyService') private propertyService: PropertyService) {}

  ngOnInit() {  
    if(!isNaN(parseInt(this.route.snapshot.paramMap.get("id")))){
      this.id = parseInt(this.route.snapshot.paramMap.get("id"));
      this.property = this.propertyService.getProperty(this.id);
    }
  }

  getProperty(): Object{
    return this.property;
  }

  getSuperscription(): Object{
    return this.property.getSuperscription();
  }

  getFeatures(): Object{
    return this.property.getFeatures();
  }

  getPhotos(): Object[]{
    return this.property.getPhoto();
  }
}
