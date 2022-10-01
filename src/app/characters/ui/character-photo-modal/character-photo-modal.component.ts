import { Component, Input, OnInit } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-character-photo-modal',
    templateUrl: './character-photo-modal.component.html',
    styleUrls: ['./character-photo-modal.component.scss']
})
export class CharacterPhotoModalComponent implements OnInit {
    constructor(private modal: NgbActiveModal) {}

    @Input() nameCharacter = 'Personaje desconocido'
    @Input() photoCharacter!: string
    ngOnInit(): void {}
    closeModal(reason?: string) {
        this.modal.close(reason)
    }

    dismissModal(reason?: string) {
        this.modal.dismiss(reason)
    }
}
