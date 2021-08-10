import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { SourcesFinancementComponent } from './sources-financement.component';
import { SourcesFinancementDetailComponent } from './sources-financement-detail.component';
import { SourcesFinancementUpdateComponent } from './sources-financement-update.component';
import { SourcesFinancementDeleteDialogComponent } from './sources-financement-delete-dialog.component';
import { sourcesFinancementRoute } from './sources-financement.route';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(sourcesFinancementRoute)],
  declarations: [
    SourcesFinancementComponent,
    SourcesFinancementDetailComponent,
    SourcesFinancementUpdateComponent,
    SourcesFinancementDeleteDialogComponent,
  ],
  entryComponents: [SourcesFinancementDeleteDialogComponent],
})
export class ReferentielmsSourcesFinancementModule {}
