import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteruploadComponent } from './registerupload.component';

describe('RegisteruploadComponent', () => {
  let component: RegisteruploadComponent;
  let fixture: ComponentFixture<RegisteruploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteruploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteruploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
