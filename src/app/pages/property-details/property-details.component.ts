import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Inject } from '@angular/core';
import { PropertyService } from 'src/app/service/property/property.service';
import { isNumber } from 'util';
import { Property } from 'src/app/service/property/property';
import { Superscription } from 'src/app/service/property/superscription';
import { Features } from 'src/app/service/property/features';
import { Photo } from 'src/app/service/property/photo';

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

  getProperty(): Property{
    return this.property;
  }

  getSuperscription(): Superscription{
    return this.property.getSuperscription();
  }

  getFeatures(): Features{
    return this.property.getFeatures();
  }

  getPhotos(): Photo[]{
    return this.property.getPhoto();
  }
}
