import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let compoenet : AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let de:DebugElement;

  beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations:[AppComponent],
      })
      .compileComponents();//compile css and templates
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    compoenet = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });


  it('should create', ()=>{
    expect(compoenet).toBeTruthy();
  });

  it('should have a message with JUAN',()=>{
    expect(compoenet.title).toContain('JUAN');
  });

  it('should have a message with 100',()=>{
    expect(compoenet.title2).toContain('100');
  });
   
  it('should have a message with JUAN (Error)',()=>{
    expect(compoenet.title).toBe('JUAN');
  });
});
