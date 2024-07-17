import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  getData(storage: string, key: string): any {
    let res = storage === 'local' ? localStorage.getItem(key) : sessionStorage.getItem(key)
    console.log(res)
    return res ? JSON.parse(res) : []
  }

  setData(storage: string, key: string, data: any): any {
    return storage === 'local' ? localStorage.setItem(key, JSON.stringify(data)) : sessionStorage.setItem(key, JSON.stringify(data))
  }
}
