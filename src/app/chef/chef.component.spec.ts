import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefComponent } from './chef.component';
import { FormBuilder } from '@angular/forms';

xdescribe('ChefComponent', () => {
  let component: ChefComponent;
  let fixture: ComponentFixture<ChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
