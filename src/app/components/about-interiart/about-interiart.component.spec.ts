import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInteriartComponent } from './about-interiart.component';

describe('AboutInteriartComponent', () => {
  let component: AboutInteriartComponent;
  let fixture: ComponentFixture<AboutInteriartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInteriartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInteriartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
