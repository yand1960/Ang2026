import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calc1 } from './calc1';

describe('Calc1', () => {
  let component: Calc1;
  let fixture: ComponentFixture<Calc1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calc1],
    }).compileComponents();

    fixture = TestBed.createComponent(Calc1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
