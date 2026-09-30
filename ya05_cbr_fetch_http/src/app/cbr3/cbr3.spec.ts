import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cbr3 } from './cbr3';

describe('Cbr3', () => {
  let component: Cbr3;
  let fixture: ComponentFixture<Cbr3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cbr3],
    }).compileComponents();

    fixture = TestBed.createComponent(Cbr3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
