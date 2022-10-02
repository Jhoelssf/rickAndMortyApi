import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCharacterComponent } from './claim-character.component';

describe('ClaimCharacterComponent', () => {
  let component: ClaimCharacterComponent;
  let fixture: ComponentFixture<ClaimCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
