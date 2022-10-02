import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CharactersListComponent } from './ui/characters-list/characters-list.component'
import { ClaimCharacterComponent } from './ui/claim-character/claim-character.component'
import { MyCollectionComponent } from './ui/my-collection/my-collection.component'

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'list',
        component: CharactersListComponent
    },
    {
        path: 'my-collection',
        component: MyCollectionComponent
    },
    {
        path: 'claim',
        component: ClaimCharacterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule {}
