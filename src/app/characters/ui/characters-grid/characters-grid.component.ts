import { Component, Input, OnInit } from '@angular/core'
import { Characters } from '../../../models/generated'

@Component({
    selector: 'app-characters-grid',
    templateUrl: './characters-grid.component.html',
    styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit {
    @Input() characters!: Characters
    constructor() {}

    ngOnInit(): void {
        console.log(this.characters)
    }
}
