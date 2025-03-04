import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { MyCounterComponent } from './my-counter.component';
import { Store, StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { async, of } from 'rxjs';
import { decrement, increment, reset } from '../storage/counter/counter.actions';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;
  let store: Store<{ count: number }>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCounterComponent,
        StoreModule.forRoot({ count: (state: number = 0) => state })
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the current count', waitForAsync(() => {

    spyOn(store, 'select').and.returnValue(of(5));

    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      const countElement = fixture.debugElement.query(By.css('div')).nativeElement.textContent;
      expect(countElement).toContain('Current Count: 5');
    });
  }));
  it('should dispatch the increment action when increment button is clicked', () => {
    spyOn(store, 'dispatch')

    const incrementButton = fixture.debugElement.query(By.css('button:nth-of-type(1)'));
    incrementButton.triggerEventHandler('click', null);

    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should dispatch the decrement action when decrement button is clicked', () => {
    spyOn(store, 'dispatch');
    const decrementButton = fixture.debugElement.query(By.css('button:nth-of-type(2)'));
    decrementButton.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(decrement());
  });
  it('should dispatch the reset action when reset button is clicked', () => {
    spyOn(store, 'dispatch');

    const resetButton = fixture.debugElement.query(By.css('button:nth-of-type(3)'));
    resetButton.triggerEventHandler('click', null);
    expect(store.dispatch).toHaveBeenCalledWith(reset());
  });

});
