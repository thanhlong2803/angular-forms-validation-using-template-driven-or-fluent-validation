import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FluentValidationComponent } from './fluent-validation.component';



describe('HomeComponent', () => {
  let component: FluentValidationComponent;
  let fixture: ComponentFixture<FluentValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluentValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
