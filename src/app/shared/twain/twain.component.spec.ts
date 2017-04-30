import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TwainComponent } from './twain.component';
import { DebugElement } from "@angular/core";
import { TwainService } from "./twain.service";
import { By } from "@angular/platform-browser";

describe('TwainComponent', () => {
  let comp : TwainComponent;
  let fixture : ComponentFixture<TwainComponent>;

  let twainService : TwainService;

  let de : DebugElement;  // the DebugElement with the welcome message
  let el : HTMLElement; // the DOM element with the welcome message
  let spy : jasmine.Spy;

  const testQuote = 'Test Quote';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TwainComponent ],
      providers: [ TwainService ],
    });

    fixture = TestBed.createComponent(TwainComponent);
    comp = fixture.componentInstance;

    // TwainService actually injected into the component
    twainService = fixture.debugElement.injector.get(TwainService);

    // Setup spy on the `getQuote` method
    spy = spyOn(twainService, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });

  //tests

  it('should not show quote before OnInit', () => {
    expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    expect(el.textContent).toBe('...', 'no quote yet');
    expect(spy.calls.any()).toBe(true, 'getQuote called');

    // debugger;

    console.log('calls count : ', spy.calls.count());
    // fixture.detectChanges();
    // fixture.detectChanges();
    fixture.detectChanges();
    console.log('calls count : ', spy.calls.count());

  });

  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(el.textContent).toBe(testQuote);
    });
  }));

  //tick

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));

  //done

  it('should show quote after getQuote promise (done)', (done: any) => {
    fixture.detectChanges();

    // get the spy promise and wait for it to resolve
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });
  });


});
