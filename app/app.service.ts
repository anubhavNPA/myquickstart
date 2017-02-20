import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';

import { Rule }             from './Rule';

@Injectable()

export class AppService {
    constructor(private http: Http) {
        console.log('RuleEngine Service Initialised...');
    }
}