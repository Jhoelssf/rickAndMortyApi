import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './shared/components/layout/layout.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'characters',
                pathMatch: 'full'
            },
            {
                path: 'characters',
                loadChildren: () => import('./characters/characters.module').then((m) => m.CharactersModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
