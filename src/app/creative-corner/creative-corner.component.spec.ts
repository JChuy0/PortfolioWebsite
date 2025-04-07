import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeCornerComponent } from './creative-corner.component';

describe('InterestsComponent', () => {
  let component: CreativeCornerComponent;
  let fixture: ComponentFixture<CreativeCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreativeCornerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
