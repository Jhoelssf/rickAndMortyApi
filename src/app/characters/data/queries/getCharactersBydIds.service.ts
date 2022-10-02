import { Injectable } from '@angular/core'
import { Query } from 'apollo-angular'
import gql from 'graphql-tag'
import { Character } from '../../../models/generated'

interface Response {
    charactersByIds: Character[]
}

interface Params {
    ids: string[]
}

@Injectable({
    providedIn: 'root'
})
export class GetCharactersByIds extends Query<Response, Params> {
    override document = gql`
        query ($ids: [ID!]!) {
            charactersByIds(ids: $ids) {
                id
                name
                image
                location {
                    id
                    name
                }
                gender
                status
                type
                created
                species
            }
        }
    `
}
