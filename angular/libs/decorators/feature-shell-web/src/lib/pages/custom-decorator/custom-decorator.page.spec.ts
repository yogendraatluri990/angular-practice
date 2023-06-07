import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomDecoratorPage } from './custom-decorator.page';

describe('CustomDecoratorPage', () => {
  let component: CustomDecoratorPage;
  let fixture: ComponentFixture<CustomDecoratorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDecoratorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomDecoratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
