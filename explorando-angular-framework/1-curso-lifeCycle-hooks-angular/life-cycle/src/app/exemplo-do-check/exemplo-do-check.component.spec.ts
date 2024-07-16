import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploDoCheckComponent } from './exemplo-do-check.component';

describe('ExemploDoCheckComponent', () => {
  let component: ExemploDoCheckComponent;
  let fixture: ComponentFixture<ExemploDoCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploDoCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
