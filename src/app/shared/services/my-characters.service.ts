import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'
import { Character } from '../../models/generated'

@Injectable({
    providedIn: 'root'
})
export class MyCharactersService {
    private myCharactersArray!: CharactersModel
    private myCharacters: BehaviorSubject<CharactersModel> = new BehaviorSubject<CharactersModel>(
        this.myCharactersArray
    )
    constructor() {}

    getMyCharacters(): BehaviorSubject<CharactersModel> {
        return this.myCharacters
    }

    addACharater(newCharacter: Character) {
        const characters = this.myCharactersArray.characters.map((cur) => ({ ...cur }))
        characters.push(newCharacter)
        const charatersModel: CharactersModel = {
            characters: characters,
            initialized: true
        }
        this.myCharactersArray.characters = characters
        this.myCharacters.next(charatersModel)
    }

    setMyCharacters(characters: CharactersModel) {
        this.myCharactersArray = characters
        this.myCharacters.next(this.myCharactersArray)
    }
}

export interface CharactersModel {
    characters: Character[]
    initialized: boolean
}
