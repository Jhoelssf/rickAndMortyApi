import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Character } from '../../../models/generated'
import { MyCharactersService } from '../../../shared/services/my-characters.service'
import { CharacterService } from '../../data/character.service'
import { ModalCharacterDetailComponent } from '../modal-character-detail/modal-character-detail.component'

@Component({
    selector: 'app-claim-character',
    templateUrl: './claim-character.component.html',
    styleUrls: ['./claim-character.component.scss']
})
export class ClaimCharacterComponent implements OnInit {
    characters!: Character[]
    constructor(
        private characterService: CharacterService,
        private modalService: NgbModal,
        private myCharacterService: MyCharactersService
    ) {}

    async ngOnInit() {
        try {
            await this.setCharacters()
        } catch (e) {
            console.log(e)
        }
    }
    async setCharacters() {
        const ids = this.generateRandomNumbers(3).map((curNum) => curNum.toString())
        this.characters = await this.characterService.getCharactersByIdsQuery(ids)
    }

    generateRandomNumbers(quantity: number) {
        const arrayNumbers = []
        for (let i = 0; i < quantity; i++) {
            arrayNumbers.push(this.generateRandomNumber(825))
        }
        return arrayNumbers
    }

    generateRandomNumber(max: number) {
        return Math.floor(Math.random() * max)
    }

    async onClaimCharacter(character?: Character) {
        try {
            if (character) {
                const modalRef = this.modalService.open(ModalCharacterDetailComponent, {
                    size: 'md',
                    centered: true
                })
                modalRef.componentInstance.character = character
                const resp = await modalRef.result
                if (resp === 'success') {
                    this.myCharacterService.addACharater(character)
                }
            } else {
                console.log(`can't claim this character`)
            }
        } catch (e) {
            if (e && e !== 1) {
                console.log(e)
            }
        }
    }
}
