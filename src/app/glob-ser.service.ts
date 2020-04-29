import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data : String = 'abc';
  private Arr = [{
    no : '1',
    isi : 'abc'
  },
  {
    no : '2',
    isi : 'cde'
  }];
  public getData() {
    return this.Data;
  }
  public getArr() {
    return this.Arr;
  }
  public setData(databaru) {
    this.Data = databaru;
  }
  public setArr(databaru) {
    this.Arr = databaru;
  }
  constructor() { }

}