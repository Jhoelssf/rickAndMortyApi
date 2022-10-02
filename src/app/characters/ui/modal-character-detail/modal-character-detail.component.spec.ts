import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCharacterDetailComponent } from './modal-character-detail.component';

describe('ModalCharacterDetailComponent', () => {
  let component: ModalCharacterDetailComponent;
  let fixture: ComponentFixture<ModalCharacterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCharacterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
