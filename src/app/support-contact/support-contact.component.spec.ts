import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportContactComponent } from './support-contact.component';

describe('SupportContactComponent', () => {
  let component: SupportContactComponent;
  let fixture: ComponentFixture<SupportContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
