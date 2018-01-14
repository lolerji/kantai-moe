import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanmusuPortfolioComponent } from './kanmusu-portfolio.component';

describe('KanmusuPortfolioComponent', () => {
  let component: KanmusuPortfolioComponent;
  let fixture: ComponentFixture<KanmusuPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanmusuPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanmusuPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
