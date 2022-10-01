import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from './shared/shared.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgbModule, AppRoutingModule, GraphQLModule, HttpClientModule, NgbModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
