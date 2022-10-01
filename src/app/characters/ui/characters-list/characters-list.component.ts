import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Character, Characters } from '../../../models/generated'
import { CharacterService } from '../../data/character.service'
import { CharacterPhotoModalComponent } from '../character-photo-modal/character-photo-modal.component'

@Component({
    selector: 'app-characters-list',
    templateUrl: './characters-list.component.html',
    styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
    characters!: Characters
    page: number = 1
    collectionSize!: number
    tableView = true
    constructor(private characterService: CharacterService, private modalService: NgbModal) {}

    async ngOnInit(): Promise<void> {
        try {
            await this.setCharacters(this.page)
        } catch (e) {
            console.log(e)
        }
    }

    async openModalPhoto(character?: Character) {
        try {
            const modalRef = this.modalService.open(CharacterPhotoModalComponent, {
                size: 'md',
                centered: true
            })
            modalRef.componentInstance.photoCharacter = character?.image || null
            modalRef.componentInstance.nameCharacter = character?.name || null
            const resp = await modalRef.result
            if (resp === 'success') {
            }
        } catch (e) {
            if (e && e !== 1) {
                console.log(e)
            }
        }
    }

    async setCharacters(page: number) {
        const resp = await this.characterService.getCharactersQuery(page)
        this.characters = resp
        this.characters.info?.count && (this.collectionSize = this.characters.info?.count)
    }

    async onPageChange(pageTemp: number | string) {
        const page = Number(pageTemp)
        if (page) {
            this.page = page
            await this.setCharacters(page)
        }
    }

    changeView() {
        this.tableView = !this.tableView
    }
}
