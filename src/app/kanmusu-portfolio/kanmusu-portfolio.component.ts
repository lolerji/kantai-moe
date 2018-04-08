import { Component, OnInit } from '@angular/core';

import { KanmusuMeta }                  from '../dataobj/kanmusu';
import { KanmusuService } from '../kanmusu-service.service';

@Component({
  selector: 'app-kanmusu-portfolio',
  templateUrl: './kanmusu-portfolio.component.html',
  styleUrls: ['./kanmusu-portfolio.component.css']
})
export class KanmusuPortfolioComponent implements OnInit {

    metadata: KanmusuMeta[];
    
    constructor(private kanmusuService: KanmusuService) { }

    ngOnInit() {
        this.getLandingKanmusu();
    }

    getLandingKanmusu(): void {
        this.kanmusuService.getKanmusuMetas().subscribe(metas => this.metadata = metas);
    }
}
