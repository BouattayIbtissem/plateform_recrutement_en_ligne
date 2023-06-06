import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandidaturecandidatComponent } from './listecandidaturecandidat.component';

describe('ListecandidaturecandidatComponent', () => {
  let component: ListecandidaturecandidatComponent;
  let fixture: ComponentFixture<ListecandidaturecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecandidaturecandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecandidaturecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
