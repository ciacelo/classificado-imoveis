import { Component, OnInit, Inject } from '@angular/core';
import { Property } from 'src/app/service/property/property';
import { PropertyService } from 'src/app/service/property/property.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  constructor(@Inject('PropertyService') private propertyService: PropertyService) {
    
   }
     
  ngOnInit() {

  

}

getProperties(): Property[]{
  return this.propertyService.getProperties();
}

}

  
