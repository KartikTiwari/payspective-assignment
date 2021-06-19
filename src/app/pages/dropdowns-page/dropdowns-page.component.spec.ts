import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsPageComponent } from './dropdowns-page.component';

describe('DropdownsPageComponent', () => {
  let component: DropdownsPageComponent;
  let fixture: ComponentFixture<DropdownsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
