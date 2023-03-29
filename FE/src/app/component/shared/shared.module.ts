import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { InfomationGuildComponent } from './infomation-guild/infomation-guild.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent, BannerComponent, InfomationGuildComponent],
  exports: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    InfomationGuildComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
