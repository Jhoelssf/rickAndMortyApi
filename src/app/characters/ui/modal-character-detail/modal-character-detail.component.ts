import { Component, Input, OnInit } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Character } from '../../../models/generated'

@Component({
    selector: 'app-modal-character-detail',
    templateUrl: './modal-character-detail.component.html',
    styleUrls: ['./modal-character-detail.component.scss']
})
export class ModalCharacterDetailComponent implements OnInit {
    @Input() character!: Character
    loading: boolean = false
    constructor(private modal: NgbActiveModal) {}

    ngOnInit(): void {}

    closeModal(reason?: string) {
        this.modal.close(reason)
    }

    dismissModal(reason?: string | unknown) {
        this.modal.dismiss(reason)
    }

    async claimCharacter() {
        try {
            this.loading = true
            await this.onClaimCharacter(this.character)
            this.closeModal('success')
            this.loading = false
        } catch (e) {
            this.dismissModal(e)
        }
    }
    async onClaimCharacter(character: Character) {
        await this.waitSeconds()
        console.log(character)
    }

    async waitSeconds() {
        return new Promise(function (resolve) {
            setTimeout(resolve, 3000)
        })
    }
}
