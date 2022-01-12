import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistedserviceComponent } from './assistedservice.component';

describe('AssistedserviceComponent', () => {
  let component: AssistedserviceComponent;
  let fixture: ComponentFixture<AssistedserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistedserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
