import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainintro } from './mainintro';

describe('Mainintro', () => {
  let component: Mainintro;
  let fixture: ComponentFixture<Mainintro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainintro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainintro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
