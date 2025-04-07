import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DioramaDetailsComponent } from './diorama-details.component';

describe('DioramaDetailsComponent', () => {
  let component: DioramaDetailsComponent;
  let fixture: ComponentFixture<DioramaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DioramaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DioramaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
