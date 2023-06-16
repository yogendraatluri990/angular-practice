import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureContentPage } from './feature-content.page';

describe('FeatureContentPage', () => {
  let component: FeatureContentPage;
  let fixture: ComponentFixture<FeatureContentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureContentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
