import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeoffrecandidatComponent } from './listeoffrecandidat.component';

describe('ListeoffrecandidatComponent', () => {
  let component: ListeoffrecandidatComponent;
  let fixture: ComponentFixture<ListeoffrecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeoffrecandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeoffrecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
