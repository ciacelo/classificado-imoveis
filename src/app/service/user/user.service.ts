import { Injectable } from '@angular/core';
import { User } from './user';
import { UserMock } from './userMock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor(){
      this.users = UserMock;
  }

  addUser(user: User): void{
    this.users.push(user);
  }


  getUser(id: number): User{
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].getId() === id){
       return this.users[i];
      }
    }
  }

  getUsers(){
    return this.users;
  }

  removeUser(id: number): void{
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].getId() === id){
        this.users.splice(1, id);
      }
    }
  }


  }
  



