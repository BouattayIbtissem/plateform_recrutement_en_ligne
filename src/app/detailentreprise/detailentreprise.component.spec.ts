import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailentrepriseComponent } from './detailentreprise.component';

describe('DetailentrepriseComponent', () => {
  let component: DetailentrepriseComponent;
  let fixture: ComponentFixture<DetailentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailentrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
