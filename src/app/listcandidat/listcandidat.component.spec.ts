import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcandidatComponent } from './listcandidat.component';

describe('ListcandidatComponent', () => {
  let component: ListcandidatComponent;
  let fixture: ComponentFixture<ListcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
