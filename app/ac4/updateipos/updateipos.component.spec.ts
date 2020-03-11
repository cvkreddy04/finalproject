import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateiposComponent } from './updateipos.component';

describe('UpdateiposComponent', () => {
  let component: UpdateiposComponent;
  let fixture: ComponentFixture<UpdateiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
