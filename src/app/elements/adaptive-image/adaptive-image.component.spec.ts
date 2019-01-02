import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptiveImageComponent } from './adaptive-image.component';

describe('AdaptiveImageComponent', () => {
  let component: AdaptiveImageComponent;
  let fixture: ComponentFixture<AdaptiveImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptiveImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptiveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
