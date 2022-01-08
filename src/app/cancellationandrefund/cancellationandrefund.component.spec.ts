import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationandrefundComponent } from './cancellationandrefund.component';

describe('CancellationandrefundComponent', () => {
  let component: CancellationandrefundComponent;
  let fixture: ComponentFixture<CancellationandrefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellationandrefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationandrefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
