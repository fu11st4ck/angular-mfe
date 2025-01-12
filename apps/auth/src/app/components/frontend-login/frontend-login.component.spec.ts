import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendLoginComponent } from './frontend-login.component';

describe('FrontendLoginComponent', () => {
  let component: FrontendLoginComponent;
  let fixture: ComponentFixture<FrontendLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
