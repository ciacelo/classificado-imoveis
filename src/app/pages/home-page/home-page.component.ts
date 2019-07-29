import { Component, OnInit, Inject } from '@angular/core';
import { PropertyService } from 'src/app/service/property/property.service';
import { Property } from 'src/app/service/property/property';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(@Inject('PropertyService') private propertyService: PropertyService) { }

  ngOnInit() {
  }

  getProperties(): Property[]{
    return this.propertyService.getProperties();
  }


}
