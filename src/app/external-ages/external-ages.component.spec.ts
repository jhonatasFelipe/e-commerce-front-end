import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalAgesComponent } from './external-ages.component';

describe('ExternalAgesComponent', () => {
  let component: ExternalAgesComponent;
  let fixture: ComponentFixture<ExternalAgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalAgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
