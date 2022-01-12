import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremarriagecounsellingComponent } from './premarriagecounselling.component';

describe('PremarriagecounsellingComponent', () => {
  let component: PremarriagecounsellingComponent;
  let fixture: ComponentFixture<PremarriagecounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremarriagecounsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremarriagecounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
