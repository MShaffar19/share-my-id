import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CollectionService } from './shared/collection/collection.service';
import { ConfigService } from './shared/config/config.service';

import { AddIdErrorComponent } from './add-id-error/add-id-error.component';
import { AddIdSuccessComponent } from './add-id-success/add-id-success.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';
import { CollectionShareComponent } from './collection-share/collection-share.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageHomeComponent } from './page-home/page-home.component';


@NgModule({
    declarations: [
        AddIdSuccessComponent,
        AddIdErrorComponent,
        AppComponent,
        CollectionEditComponent,
        CollectionShareComponent,
        FooterComponent,
        HeaderComponent,
        PageHomeComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    providers: [
        CollectionService,
        ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
