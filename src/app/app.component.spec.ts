import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'; 
import { RouterModule } from '@angular/router';
import { ConceptTutorialComponent } from './concept-tutorial/concept-tutorial.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([  
              // { path: '', component: AppComponent },  
              { path: '', component: ConceptTutorialComponent },
              { path: 'counter', component: MyCounterComponent },
              { path: 'concepts', component: ConceptTutorialComponent },
              { path: 'employeeinfo', component: EmployeeGridComponent }
    ])],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a router-outlet element', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));
    expect(routerOutlet).toBeTruthy(); 
  });

  it('should contain a navigation menu with two links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('nav a'));
    expect(navLinks.length).toBe(2);  
    expect(navLinks[0].nativeElement.textContent).toContain('Counter Using'); 
    expect(navLinks[1].nativeElement.textContent).toContain('Employee List');  
  });
  it('should contain correct routerLink for navigation', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('nav a'));
    expect(navLinks[0].nativeElement.getAttribute('routerLink')).toBe('/counter');  
    expect(navLinks[1].nativeElement.getAttribute('routerLink')).toBe('/employeeinfo'); 
  });

});
