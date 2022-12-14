import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CharactersRoutingModule } from './characters-routing.module'
import { CharactersListComponent } from './ui/characters-list/characters-list.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterPhotoModalComponent } from './ui/character-photo-modal/character-photo-modal.component';
import { CharactersGridComponent } from './ui/characters-grid/characters-grid.component';
import { MyCollectionComponent } from './ui/my-collection/my-collection.component';
import { ModalCharacterDetailComponent } from './ui/modal-character-detail/modal-character-detail.component';
import { ClaimCharacterComponent } from './ui/claim-character/claim-character.component'

@NgModule({
    declarations: [CharactersListComponent, CharacterPhotoModalComponent, CharactersGridComponent, MyCollectionComponent, ModalCharacterDetailComponent, ClaimCharacterComponent],
    imports: [CommonModule, CharactersRoutingModule, NgbModule]
})
export class CharactersModule {}
