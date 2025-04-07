import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DioramaCardComponent } from './diorama-card.component';

describe('DioramaCardComponent', () => {
  let component: DioramaCardComponent;
  let fixture: ComponentFixture<DioramaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DioramaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DioramaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
