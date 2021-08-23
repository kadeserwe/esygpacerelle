import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { GatewaysigmapCoreModule } from 'app/core/core.module';
import { GatewaysigmapAppRoutingModule } from './app-routing.module';
import { GatewaysigmapHomeModule } from './home/home.module';
import { GatewaysigmapEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    GatewaysigmapSharedModule,
    GatewaysigmapCoreModule,
    GatewaysigmapHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GatewaysigmapEntityModule,
    GatewaysigmapAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class GatewaysigmapAppModule {}
