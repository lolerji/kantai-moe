import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KantaiIsCuteComponent } from './kantai-is-cute.component';

describe('KantaiIsCuteComponent', () => {
  let component: KantaiIsCuteComponent;
  let fixture: ComponentFixture<KantaiIsCuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KantaiIsCuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KantaiIsCuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
