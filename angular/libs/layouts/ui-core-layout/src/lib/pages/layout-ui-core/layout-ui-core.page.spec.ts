import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutUiCorePage } from './layout-ui-core.page';

describe('LayoutUiCorePage', () => {
  let component: LayoutUiCorePage;
  let fixture: ComponentFixture<LayoutUiCorePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutUiCorePage],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutUiCorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
