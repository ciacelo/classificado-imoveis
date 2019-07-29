import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})


export class PropertyListComponent implements OnInit {
  
  @Input() properties: Object[];
  @Input() limit: number;
 
  ngOnInit(){
    let firstProperties = [];
    let propsAux = this.properties;

    if(typeof this.limit !== 'undefined'){
      this.limit--;
      for(let i=0;i<propsAux.length;i++){
        firstProperties.push(propsAux[i]);
        if(i === this.limit){
          break;
        }
      }
      this.properties = firstProperties;
    }

  }

  getProperties(): Object[]{
      return this.properties;
  }

}
