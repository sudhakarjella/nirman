import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidssummercampComponent } from './kidssummercamp.component';

describe('KidssummercampComponent', () => {
  let component: KidssummercampComponent;
  let fixture: ComponentFixture<KidssummercampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidssummercampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidssummercampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
