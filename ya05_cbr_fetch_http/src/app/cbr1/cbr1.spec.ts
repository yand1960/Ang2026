import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cbr1 } from './cbr1';

describe('Cbr1', () => {
  let component: Cbr1;
  let fixture: ComponentFixture<Cbr1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cbr1],
    }).compileComponents();

    fixture = TestBed.createComponent(Cbr1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
