import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordentrepriseComponent } from './changepasswordentreprise.component';

describe('ChangepasswordentrepriseComponent', () => {
  let component: ChangepasswordentrepriseComponent;
  let fixture: ComponentFixture<ChangepasswordentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasswordentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
