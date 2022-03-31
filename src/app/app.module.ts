import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { IcoComponent } from './component/ico/ico.component';
import { WorkComponent } from './component/work/work.component';
import { TekenSaleComponent } from './component/teken-sale/teken-sale.component';
import { DocumentationComponent } from './component/documentation/documentation.component';
import { RodMapComponent } from './component/rod-map/rod-map.component';
import { Group28Component } from './component/group28/group28.component';
import { DisktopComponent } from './component/disktop/disktop.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { PartnersComponent } from './component/partners/partners.component';
import { FQSComponent } from './component/fqs/fqs.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { FooterComponent } from './component/footer/footer.component';
import { AllContentComponent } from './component/all-content/all-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    IcoComponent,
    WorkComponent,
    TekenSaleComponent,
    DocumentationComponent,
    RodMapComponent,
    Group28Component,
    DisktopComponent,
    OurTeamComponent,
    PartnersComponent,
    FQSComponent,
    ContactUsComponent,
    SubscribeComponent,
    FooterComponent,
    AllContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
