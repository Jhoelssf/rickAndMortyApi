import { Injectable } from '@angular/core'
import { Query } from 'apollo-angular'
import gql from 'graphql-tag'
import { Characters, FilterCharacter } from '../../../models/generated'

interface Response {
    characters: Characters
}

interface Params {
    page?: number
    filter?: FilterCharacter
}

@Injectable({
    providedIn: 'root'
})
export class GetCharacters extends Query<Response, Params> {
    override document = gql`
        query ($page: Int, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
                info {
                    count
                    pages
                }
                results {
                    id
                    name
                    image
                    species
                    gender
                    created
                    status
                    type
                    location {
                        name
                        dimension
                        type
                    }
                    origin {
                        id
                        name
                        dimension
                    }
                }
            }
        }
    `
}
