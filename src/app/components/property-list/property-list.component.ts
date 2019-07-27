import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})


export class PropertyListComponent implements OnInit {
  
  @Input() properties: Object[];

  ngOnInit(){}

  getProperties(): Object[]{
      return this.properties;
  }

}
