import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CharactersListComponent } from './ui/characters-list/characters-list.component'
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
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule {}
