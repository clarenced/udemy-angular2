import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';

import {routing} from './app.routing';

@NgModule({
    imports: [ BrowserModule, routing ],
    bootstrap: [AppComponent],
    declarations: [AppComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent]
})
export class AppModule {}