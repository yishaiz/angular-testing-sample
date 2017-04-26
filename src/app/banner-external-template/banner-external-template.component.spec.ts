import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { async } from '@angular/core/testing';


import { BannerExternalTemplateComponent as BannerComponent } from './banner-external-template.component';

describe('BannerComponent - from external template', () => {

  let comp : BannerComponent;
  let fixture : ComponentFixture<BannerComponent>;
  let de : DebugElement;
  let el : HTMLElement;

  console.log('banner spec start');


  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent]
    });

    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });
*/

  it('should display original title', () => {
    fixture.detectChanges();

    console.log(el.textContent);
    console.log(comp.title);

    expect(el.textContent).toContain(comp.title);

    // expect(true).toBeTruthy();

    // throw new Error('error check');
  });


  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');

    comp.title = 'Test Title';
    expect(el.textContent).toEqual('');

    fixture.detectChanges();
    expect(el.textContent).toEqual('Test Title');
  });




});

