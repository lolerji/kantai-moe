import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { kuroshiro } from 'kuroshiro';
import { Jsonp } from '@angular/http/src/http';
import { Promise } from 'q';
import { KanmusuMeta } from './dataobj/kanmusu';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class KanmusuService {

    kanmusuMeta: Observable<any>;

    constructor(private db: AngularFireDatabase) { }

    private jsonProperty(prop: string, obj: object): any {
        if (obj.hasOwnProperty(prop)) {
            return obj[prop];
        }

        return '';
    }

    getKanmusuMetas(): Observable<any> {
        return this.db.list('/landing').valueChanges();
    }
}
