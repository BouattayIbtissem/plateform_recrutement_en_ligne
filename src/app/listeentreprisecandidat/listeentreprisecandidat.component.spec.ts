import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeentreprisecandidatComponent } from './listeentreprisecandidat.component';

describe('ListeentreprisecandidatComponent', () => {
  let component: ListeentreprisecandidatComponent;
  let fixture: ComponentFixture<ListeentreprisecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeentreprisecandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeentreprisecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
