import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginData{
  limit : number,
  skip : number,
  total : number,
  users :  []
}

export interface user{
address : object,
age : number,
username : string,
firstName : string,
lastName : string,
password : string
email : string
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getLoginData():Observable<LoginData> {
    return this.http.get<LoginData>(this.url);
  }

}
