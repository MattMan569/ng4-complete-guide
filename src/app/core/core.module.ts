import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [HeaderComponent, HomeComponent],

    // Header uses dropdown directive and has routes
    imports: [SharedModule, AppRoutingModule],

    // Using the selector of the header component in the
    // app component template, need to export it
    exports: [AppRoutingModule, HeaderComponent]
})
export class CoreModule {}
