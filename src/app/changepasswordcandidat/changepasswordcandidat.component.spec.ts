import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordcandidatComponent } from './changepasswordcandidat.component';

describe('ChangepasswordcandidatComponent', () => {
  let component: ChangepasswordcandidatComponent;
  let fixture: ComponentFixture<ChangepasswordcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordcandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepasswordcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
