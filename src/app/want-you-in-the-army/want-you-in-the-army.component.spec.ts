import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantYouInTheArmyComponent } from './want-you-in-the-army.component';

describe('WantYouInTheArmyComponent', () => {
  let component: WantYouInTheArmyComponent;
  let fixture: ComponentFixture<WantYouInTheArmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantYouInTheArmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantYouInTheArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
