import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftregistryComponent } from './giftregistry.component';

describe('GiftregistryComponent', () => {
  let component: GiftregistryComponent;
  let fixture: ComponentFixture<GiftregistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftregistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
