import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masterpage } from './masterpage';

describe('Masterpage', () => {
  let component: Masterpage;
  let fixture: ComponentFixture<Masterpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masterpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Masterpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
