import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagecounsellingComponent } from './marriagecounselling.component';

describe('MarriagecounsellingComponent', () => {
  let component: MarriagecounsellingComponent;
  let fixture: ComponentFixture<MarriagecounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriagecounsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriagecounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
