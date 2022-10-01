import { Injectable } from '@angular/core'
import { Query } from 'apollo-angular'
import gql from 'graphql-tag'
import { Character } from '../../../models/generated'

interface Response {
    character: Character
}

interface Params {
    id: number
}

@Injectable({
    providedIn: 'root'
})
export class GetCharacterById extends Query<Response, Params> {
    override document = gql`
        query ($id: ID!) {
            character(id: $id) {
                name
                id
                status
                species
                image
                gender
            }
        }
    `
}
