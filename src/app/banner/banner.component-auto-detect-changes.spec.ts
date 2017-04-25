import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BannerComponent } from  './banner.component';


xdescribe('BannerComponent - Auto Change Detection', () => {

  let comp : BannerComponent;
  let fixture : ComponentFixture<BannerComponent>;
  let de : DebugElement;
  let el : HTMLElement;

  console.log('banner spec start');

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });


  it('should display original title', () => {
    // fixture.detectChanges();

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
    // expect(el.textContent).toEqual('');
    // fixture.detectChanges();


    comp.title = 'Test Title';
    expect(el.textContent).toEqual('');

    fixture.detectChanges();
    expect(el.textContent).toEqual('Test Title');
  });

});

