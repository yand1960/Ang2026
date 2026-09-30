import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cbr } from './cbr';

describe('Cbr', () => {
  let component: Cbr;
  let fixture: ComponentFixture<Cbr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cbr],
    }).compileComponents();

    fixture = TestBed.createComponent(Cbr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
