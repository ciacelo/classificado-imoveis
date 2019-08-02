import { Component, SimpleChanges, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  showProfile = false;
  isHome = false;

  constructor(private router: Router, @Inject('AuthService') private authService: AuthService){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationStart){
        if(val.url.toLocaleLowerCase() === '/home' || 
            val.url.toLocaleLowerCase() === '/' || 
            val.url.toLocaleLowerCase() === '/#'){
          this.isHome = true;
        }else{
          this.isHome = false;
        }

        this.showProfile = this.authService.isAuthenticated();
      }
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  }  


}
