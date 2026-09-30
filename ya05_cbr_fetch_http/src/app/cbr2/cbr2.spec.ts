import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cbr2 } from './cbr2';

describe('Cbr2', () => {
  let component: Cbr2;
  let fixture: ComponentFixture<Cbr2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cbr2],
    }).compileComponents();

    fixture = TestBed.createComponent(Cbr2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
