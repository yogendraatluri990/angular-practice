import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecoratorNotificationComponent } from './decorator-notification.component';

describe('DecoratorNotificationComponent', () => {
  let component: DecoratorNotificationComponent;
  let fixture: ComponentFixture<DecoratorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DecoratorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
