import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calc2 } from './calc2';

describe('Calc2', () => {
  let component: Calc2;
  let fixture: ComponentFixture<Calc2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calc2],
    }).compileComponents();

    fixture = TestBed.createComponent(Calc2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
