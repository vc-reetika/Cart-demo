import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogService {

  constructor() { }

  log<T>(msg : T){
    return console.log(msg)
  }

}
