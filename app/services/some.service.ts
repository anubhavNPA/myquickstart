import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class SomeService {
    constructor(/*private http: Http */) {
        console.log('Some Service Initialised...');
    }
    sendData() {
        console.log('some service called');
        
        return 'message from some service';
    }
}