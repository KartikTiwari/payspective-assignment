import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsPageComponent } from './dropdowns-page.component';
import {AppModule} from '../../app.module';

describe('DropdownsPageComponent', () => {
  let component: DropdownsPageComponent;
  let fixture: ComponentFixture<DropdownsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsPageComponent ],
      imports: [AppModule]
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
