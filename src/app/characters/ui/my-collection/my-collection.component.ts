import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Character, Characters, FilterCharacter } from '../../../models/generated'
import { CharactersModel, MyCharactersService } from '../../../shared/services/my-characters.service'
import { CharacterService } from '../../data/character.service'

@Component({
    selector: 'app-my-collection',
    templateUrl: './my-collection.component.html',
    styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit, OnDestroy {
    myCharacters!: Character[]
    characters$: Subscription = new Subscription()
    constructor(private characterService: CharacterService, private myCharactersService: MyCharactersService) {}
    ngOnDestroy(): void {
        this.characters$.unsubscribe()
    }

    async ngOnInit(): Promise<void> {
        try {
            // await this.setCharacters()
            this.characters$ = this.myCharactersService.getMyCharacters().subscribe(async (characterModel) => {
                console.log(characterModel)

                if (!characterModel?.initialized) {
                    await this.setCharacters()
                    return
                }
                this.myCharacters = characterModel.characters
                console.log(this.myCharacters)
            })
        } catch (e) {
            console.log(e)
        }
    }

    async setCharacters() {
        const ids = this.generateRandomNumbers(15).map((curNum) => curNum.toString())
        const charactersResp = await this.characterService.getCharactersByIdsQuery(ids)
        const characterModel: CharactersModel = {
            characters: charactersResp,
            initialized: true
        }
        this.myCharactersService.setMyCharacters(characterModel)
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
}
