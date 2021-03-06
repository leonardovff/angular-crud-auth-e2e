import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: object = null;
  user: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private http: HttpClient
  ) {
    let user = this.getUserFromStorage();
    if(user){
      this.setUser(user, false);
    }
  }
  private getUserFromStorage(){
    let data = localStorage.getItem('user_authenticated');
    if(!data) return null;
    return JSON.parse(data);
  }
  private setUser(user: object, toPersist: boolean = true){
    this.currentUser = user;
    this.user.next(user);
    if(toPersist){
      localStorage.setItem('user_authenticated', JSON.stringify(user));
    }
  }
  login(data: object): Promise<any> { 
    return new Promise((resolve, reject) => {
      this.http
      .post('auth', data).subscribe(res => {
        this.setUser(res);
        resolve();
      }, error => {
        reject();
      });
    });
  }
  logout(){
    this.setUser(null)
  }
  getToken(){
    if(this.currentUser){
      return this.currentUser['token'];
    }
    return null;
  }
}
