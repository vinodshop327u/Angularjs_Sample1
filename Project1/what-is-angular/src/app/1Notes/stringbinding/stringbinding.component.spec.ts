import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringbindingComponent } from './stringbinding.component';

describe('StringbindingComponent', () => {
  let component: StringbindingComponent;
  let fixture: ComponentFixture<StringbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
