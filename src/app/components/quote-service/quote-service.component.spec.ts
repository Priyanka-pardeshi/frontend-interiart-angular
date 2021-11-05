import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteServiceComponent } from './quote-service.component';

describe('QuoteServiceComponent', () => {
  let component: QuoteServiceComponent;
  let fixture: ComponentFixture<QuoteServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
