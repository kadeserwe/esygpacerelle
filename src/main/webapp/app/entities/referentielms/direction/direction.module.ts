import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DirectionComponent } from './direction.component';
import { DirectionDetailComponent } from './direction-detail.component';
import { DirectionUpdateComponent } from './direction-update.component';
import { DirectionDeleteDialogComponent } from './direction-delete-dialog.component';
import { directionRoute } from './direction.route';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(directionRoute)],
  declarations: [DirectionComponent, DirectionDetailComponent, DirectionUpdateComponent, DirectionDeleteDialogComponent],
  entryComponents: [DirectionDeleteDialogComponent],
})
export class ReferentielmsDirectionModule {}
