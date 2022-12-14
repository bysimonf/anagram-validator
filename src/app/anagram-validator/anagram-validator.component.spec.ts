import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramValidatorComponent } from './anagram-validator.component';

describe('AnagramValidatorComponent', () => {
  let component: AnagramValidatorComponent;
  let fixture: ComponentFixture<AnagramValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagramValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagramValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
