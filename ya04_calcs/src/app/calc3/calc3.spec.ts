import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Calc3 } from "./calc3";

describe("Calc3", () => {
  let component: Calc3;
  let fixture: ComponentFixture<Calc3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calc3],
    }).compileComponents();

    fixture = TestBed.createComponent(Calc3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
