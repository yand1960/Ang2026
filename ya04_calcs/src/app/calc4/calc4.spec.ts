import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Calc4 } from "./calc4";

describe("Calc4", () => {
  let component: Calc4;
  let fixture: ComponentFixture<Calc4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calc4],
    }).compileComponents();

    fixture = TestBed.createComponent(Calc4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
