import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresumecvComponent } from './myresumecv.component';

describe('MyresumecvComponent', () => {
  let component: MyresumecvComponent;
  let fixture: ComponentFixture<MyresumecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyresumecvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyresumecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
