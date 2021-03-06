import { Injectable, Inject } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User;
  users: User[];

  constructor(@Inject('UserService') private userService: UserService){
    this.users = this.userService.getUsers();
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
  
  login(email: string, password: string): boolean{
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].getEmail() === email && this.users[i].getPassword() === password){
        window.localStorage.setItem('user', JSON.stringify(this.users[i]));
        this.user = this.users[i];
        return true;
      }
    }
    return false;
  }

  getUser(): User{
    return this.user;
  } 

  isAuthenticated(): boolean{
    if( this.user !== null){
      return true;
    }
    return false;
  }
}
