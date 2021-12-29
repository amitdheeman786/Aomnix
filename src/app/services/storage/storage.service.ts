import { Injectable } from '@angular/core';
import { Storage_Keys } from './storage.keys';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private savedData: any = {};

  constructor() { }

  public getSavedData() {
    this.savedData = {};
    Object.keys(Storage_Keys).forEach(
      (key) => {
        if (key) {
          let data = JSON.parse(JSON.parse(this.get(Storage_Keys[key])));
          if (data) {
            this.savedData[Storage_Keys[key]] = data;
          }
        }
      }
    );

    return this.savedData;
  }

  public set(key: string, data: any) {
    if (!data) {
      return;
    }
    return localStorage.setItem(key, JSON.stringify(JSON.stringify(data)));
  }

  private get(key: string) {
    return localStorage.getItem(key);
  }

  public removeItem(key: string) {
    delete this.savedData[key];
    return localStorage.removeItem(key);
  }

  private clearStorage() {
    localStorage.clear();
  }

  public clearStorageForLogout() {
    Object.keys(Storage_Keys).forEach(
      (key) => {
        this.removeItem(Storage_Keys[key]);
      }
    );
    this.savedData = {};
  }
}
