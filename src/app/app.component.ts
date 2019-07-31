import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  showProfile = false;
  isHome = false;

  constructor(private router: Router){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationStart){
        if(val.url.toLocaleLowerCase() === '/home'){
          this.isHome = true;
        }else{
          this.isHome = false;
        }
      }
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  }  


}
