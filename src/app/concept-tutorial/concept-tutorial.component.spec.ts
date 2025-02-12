import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptTutorialComponent } from './concept-tutorial.component';

describe('ConceptTutorialComponent', () => {
  let component: ConceptTutorialComponent;
  let fixture: ComponentFixture<ConceptTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
