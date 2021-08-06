import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ModeSelectionComponent } from './mode-selection.component';
import { ModeSelectionDetailComponent } from './mode-selection-detail.component';
import { ModeSelectionUpdateComponent } from './mode-selection-update.component';
import { ModeSelectionDeleteDialogComponent } from './mode-selection-delete-dialog.component';
import { modeSelectionRoute } from './mode-selection.route';
//Ajouter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule,Ng2SearchPipeModule, RouterModule.forChild(modeSelectionRoute)],
  declarations: [ModeSelectionComponent, ModeSelectionDetailComponent, ModeSelectionUpdateComponent, ModeSelectionDeleteDialogComponent],
  entryComponents: [ModeSelectionDeleteDialogComponent],
})
export class ReferentielmsModeSelectionModule {}
