import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CventrepriseComponent } from './cventreprise.component';

describe('CventrepriseComponent', () => {
  let component: CventrepriseComponent;
  let fixture: ComponentFixture<CventrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CventrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CventrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
