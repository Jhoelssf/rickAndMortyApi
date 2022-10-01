import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPhotoModalComponent } from './character-photo-modal.component';

describe('CharacterPhotoModalComponent', () => {
  let component: CharacterPhotoModalComponent;
  let fixture: ComponentFixture<CharacterPhotoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPhotoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterPhotoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
