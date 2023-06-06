import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcandidatnormalComponent } from './listcandidatnormal.component';

describe('ListcandidatnormalComponent', () => {
  let component: ListcandidatnormalComponent;
  let fixture: ComponentFixture<ListcandidatnormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcandidatnormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcandidatnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
