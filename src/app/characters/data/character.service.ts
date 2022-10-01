import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { Character, Characters, FilterCharacter } from '../../models/generated'
import { GetCharacterById } from './queries/get-character-by-id.service'
import { GetCharacters } from './queries/get-characters.service'
import { GetCharactersByIds } from './queries/getCharactersBydIds.service'

@Injectable({
    providedIn: 'root'
})
export class CharacterService {
    constructor(
        private getCharacterById: GetCharacterById,
        private getCharacters: GetCharacters,
        private getCharactersByIds: GetCharactersByIds
    ) {}

    async getCharacterByIdQuery(id: number): Promise<Character> {
        const resp$ = this.getCharacterById.fetch({ id }, { fetchPolicy: 'network-only' })
        const { data } = await firstValueFrom(resp$)
        return data.character
    }

    async getCharactersQuery(page?: number, filter?: FilterCharacter): Promise<Characters> {
        const resp$ = this.getCharacters.fetch({ page, filter }, { fetchPolicy: 'network-only' })
        const { data } = await firstValueFrom(resp$)
        return data.characters
    }

    async getCharactersByIdsQuery(ids: number[]): Promise<Character[]> {
        const resp$ = this.getCharactersByIds.fetch({ ids }, { fetchPolicy: 'network-only' })
        const { data } = await firstValueFrom(resp$)
        return data.charactersByIds
    }
}
