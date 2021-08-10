import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { HierarchieComponent } from './hierarchie.component';
import { HierarchieDetailComponent } from './hierarchie-detail.component';
import { HierarchieUpdateComponent } from './hierarchie-update.component';
import { HierarchieDeleteDialogComponent } from './hierarchie-delete-dialog.component';
import { hierarchieRoute } from './hierarchie.route';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  imports: [GatewaysigmapSharedModule,  Ng2SearchPipeModule, RouterModule.forChild(hierarchieRoute)],
  declarations: [HierarchieComponent, HierarchieDetailComponent, HierarchieUpdateComponent, HierarchieDeleteDialogComponent],
  entryComponents: [HierarchieDeleteDialogComponent],
})
export class ReferentielmsHierarchieModule {}
