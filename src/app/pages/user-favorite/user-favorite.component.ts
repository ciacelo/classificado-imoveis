import { Component, OnInit, Inject } from '@angular/core';
import { PropertyService } from 'src/app/service/property/property.service';
import { Property } from 'src/app/service/property/property';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css']
})
export class UserFavoriteComponent implements OnInit {

  constructor(@Inject('PropertyService') private propertyService: PropertyService) { }

  ngOnInit() {
  }

  getProperties(): Property[] {
    return this.propertyService.getProperties();  
  }

}
