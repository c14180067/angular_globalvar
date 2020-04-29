import { Component } from '@angular/core';
import { GlobSerService} from './glob-ser.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  datadariglob : any;
  arrdariglob : any;
  datahtml : String;
  dno = '';
  dat = '';
  datatambah : any;
  datatemp : any;
  constructor (public variabelglobal : GlobSerService) {
    this.datadariglob = this.variabelglobal.getData();
    this.arrdariglob = this.variabelglobal.getArr();
    this.datatemp = this.arrdariglob;
  }

  ubahdata() {
    this.variabelglobal.setData(this.datahtml);
    this.datahtml = "";
    this.datadariglob = this.variabelglobal.getData();
  }

  save() {
    this.datatambah = {
      no: this.dno,
      isi : this.dat
    };
    this.datatemp.push(this.datatambah);
    this.variabelglobal.setArr(this.datatemp);
  }
}
