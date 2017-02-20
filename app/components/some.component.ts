import { Component }    from '@angular/core';
import { SomeService }  from '../services/some.service';

@Component({
  moduleId: module.id,
  selector: 'some',
  templateUrl: `some.component.html`,
  styleUrls: ['some.component.css']
})
export class SomeComponent  { 
  name = 'SomeComponent'; 
  message = '';

  constructor(private _someService: SomeService) {
    this.message = this._someService.sendData();
  }
}
